<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonModule for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Production\Controller;

use Application\Entity\Area;
use Application\Entity\Category;
use Application\Entity\Production;
use Doctrine\ORM\EntityManager;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\JsonModel;

class ProductionController extends AbstractActionController
{
    /**
     * @var EntityManager
     */
    private $entityManager;

    /**
     * @var
     */
    private $authService;

    /**
     * LoginController constructor.
     * @param EntityManager $em
     * @param $auth
     */
    public function __construct(EntityManager $em, $auth)
    {
        $this->entityManager = $em;
        $this->authService = $auth;
    }

    /**
     * load all categories
     * @return JsonModel JSON Data
     */
    public function loadAction()
    {
        $start = $this->params()->fromPost('start');
        $limit = $this->params()->fromPost('limit');
        $postData = $this->params()->fromPost();
        $sortInfo = $this->params()->fromPost('sort', '[{"property":"id","direction":"ASC"}]');
        $sorters = json_decode($sortInfo);
        $dir = $sorters[0]->direction;
        $sort = $sorters[0]->property;
        $queryBuilder = $this->entityManager->createQueryBuilder();
        $query = $queryBuilder->select(array(
            'production.productionId as id',
            'production.batchNo as batchNo',
            'production.noOfPlants as noOfPlants',
            'production.harvestingStart as harvestingStart',
            'production.estimatedYield as estimatedYield',
            'production.harvestingStartDate as harvestingStartDate',
            'production.harvestingEndDate as harvestingEndDate',
            'production.status as status',
            'category.name as categoryName',
            'area.name as areaName',
            'product.name as productName',
        ))
            ->from('Application\Entity\Production','production')
            ->leftJoin('production.category','category')
            ->leftJoin('production.area','area')
            ->leftJoin('production.product','product')
            ->orderBy($sort, $dir);
        if (isset($start) && !empty($start)
        ) {
            $query->setFirstResult($start);
        }
        if (isset($limit) && !empty($limit)) {

            $query->setMaxResults($limit);
        }
        $query = $this->buildWhere($query, $postData);
        $result = $query->getQuery()->getResult();
        return new JsonModel(array(
            "success" => "true",
            "total" => $this->getCount(),
            "item" => $result
        ));
    }

    /**
     * Save a Category
     */
    public function saveAction()
    {
        $data = $this->params()->fromPost();
        $update = false;
        $msg = "Operation failed, please contact your admin.";
        if (isset($data['id']) && !empty($data['id'])){
            $update = true;
            $production = $this->entityManager->find('Application\Entity\Production',$data['id']);
        } else{
            $production = new Production();
        }

        $production->setArea(
            $this->entityManager->find('Application\Entity\Area',$data['area'])
        );
        $production->setProduct(
            $this->entityManager->find('Application\Entity\Product',$data['product'])
        );
        $production->setCategory(
            $this->entityManager->find('Application\Entity\Category',$data['category'])
        );
        $production->setEstimatedYield($data['estimatedYield']);
        $production->setNoOfPlants($data['noOfPlant']);
        $production->setHarvestingEndDate(new \DateTime($data['harvestingEndDate']));
        $production->setHarvestingStartDate(new \DateTime($data['harvestingStartDate']));
        $production->setHarvestingStart(new \DateTime($data['harvestingStart']));
        $production->setSowingDate(new \DateTime($data['sowingDate']));
        $production->set(new \DateTime($data['sowingDate']));

        if ($update){
            $this->entityManager->merge($production);
            $msg = "Production updated successfully.";
        } else{
            $this->entityManager->persist($production);
            $msg = "Production added successfully.";
        }
        $this->entityManager->flush();

        return new JsonModel(array(
            "success" => "true",
            "msg" => $msg
        ));
    }
    
    /**
     * load single Category Row by Given Id
     * @param $id
     */
    public function recordAction()
    {
        $id = $this->params()->fromQuery('id', false);
        $queryBuilder = $this->entityManager->createQueryBuilder();
        $query = $queryBuilder->select(array(
            'production.productionId as productionId',
            'production.batchNo as batchNo',
            'production.noOfPlants as noOfPlants',
            'production.harvestingStart as harvestingStart',
            'production.estimatedYield as estimatedYield',
            'production.harvestingStartDate as harvestingStartDate',
            'production.harvestingEndDate as harvestingEndDate',
            'production.status as status',
            'category.name as categoryName',
            'area.name as areaName',
            'product.name as productName',
        ))
            ->from('Application\Entity\Production','production')
            ->leftJoin('production.category','category')
            ->leftJoin('production.area','area')
            ->leftJoin('production.product','product')
            ->where('production.productionId = :id')
            ->setParameter('id',$id);
        $result = $query->getQuery()->getResult();
        return new JsonModel(array(
            "success" => "true",
            "item" => $result
        ));
    }

    /**
     * @return bool|mixed
     */
    protected function getCount()
    {
        $queryBuilder = $this->entityManager->createQueryBuilder();
        $query = $queryBuilder->select(array(
            $queryBuilder->expr()->count('production.productionId')
        ))
            ->from('Application\Entity\Production','production')
            ->leftJoin('production.category','category')
            ->leftJoin('production.area','area')
            ->leftJoin('production.product','product');
        $result = $query->getQuery()->getSingleScalarResult();
        if ($result)
            return $result;
        else
            return false;
    }

    protected function buildWhere($query, $postData)
    {
        $query->where('production.productionId != :nullValue')
            ->setParameter('nullValue', null);
        if (isset($postData['category']) && !empty($postData['category'])){
            $query->andWhere('production.category IN (:category)')
                ->setParameter('category', $postData['category']);
        }
        if (isset($postData['area']) && !empty($postData['area'])){
            $query->andWhere('production.area IN (:area)')
                ->setParameter('area', $postData['area']);
        }
        if (isset($postData['product']) && !empty($postData['product'])){
            $query->andWhere('production.product IN (:product)')
                ->setParameter('product', $postData['product']);
        }
        if (isset($postData['productionId']) && !empty($postData['productionId'])){
            $query->andWhere('production.productionId = :productionId')
                ->setParameter('productionId', $postData['productionId']);
        }
        if (isset($postData['batchNo']) && !empty($postData['batchNo'])){
            $query->andWhere('production.batchNo LIKE :batchNo')
                ->setParameter('batchNo', '%'.$postData['batchNo'].'%');
        }
        if (isset($postData['noOfPlants']) && !empty($postData['noOfPlants'])){
            $query->andWhere('production.noOfPlants = :noOfPlants')
                ->setParameter('noOfPlants', $postData['noOfPlants']);
        }
        if (isset($postData['harvestingStart']) && !empty($postData['harvestingStart'])){
            $query->andWhere('production.harvestingStart LIKE :harvestingStart')
                ->setParameter('harvestingStart', '%'.$postData['harvestingStart'].'%');
        }
        if (isset($postData['estimatedYield']) && !empty($postData['estimatedYield'])){
            $query->andWhere('production.estimatedYield LIKE :estimatedYield')
                ->setParameter('estimatedYield', '%'.$postData['estimatedYield'].'%');
        }
        if (isset($postData['harvestingStartDate']) && !empty($postData['harvestingStartDate'])){
            $query->andWhere('production.harvestingStartDate LIKE :harvestingStartDate')
                ->setParameter('harvestingStartDate', '%'.$postData['harvestingStartDate'].'%');
        }
        if (isset($postData['harvestingEndDate']) && !empty($postData['harvestingEndDate'])){
            $query->andWhere('production.harvestingEndDate LIKE :harvestingEndDate')
                ->setParameter('harvestingEndDate', '%'.$postData['harvestingEndDate'].'%');
        }
        if (isset($postData['status']) && !empty($postData['status'])){
            $query->andWhere('production.status LIKE :status')
                ->setParameter('status', '%'.$postData['status'].'%');
        }

        return $query;
    }
}
