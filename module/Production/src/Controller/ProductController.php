<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonModule for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Production\Controller;

use Application\Entity\Category;
use Application\Entity\Product;
use Doctrine\ORM\EntityManager;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\JsonModel;

class ProductController extends AbstractActionController
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
        $queryBuilder = $this->entityManager->createQueryBuilder();
        $query = $queryBuilder->select(array(
            'product.productId as id',
            'product.name as name',
            'product.details as detail',
        ))
            ->from('Application\Entity\Product','product');
        $result = $query->getQuery()->getResult();
        return new JsonModel(array(
            "success" => "true",
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
            $product = $this->entityManager->find('Application\Entity\Product',$data['id']);
        } else{
            $product = new Product();
        }

        $product->setName($data['name']);
        $product->setDetails($data['detail']);

        if ($update){
            $this->entityManager->merge($product);
            $msg = "Product updated successfully.";
        } else{
            $this->entityManager->persist($product);
            $msg = "Product added successfully.";
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
            'product.productId as id',
            'product.name as name',
            'product.details as detail',
        ))
            ->from('Application\Entity\Product','product')
            ->where('product.productId = :id')
            ->setParameter('id',$id);
        $result = $query->getQuery()->getResult();
        return new JsonModel(array(
            "success" => "true",
            "items" => $result
        ));
    }
	
	/**
     * load all products
     * @return JsonModel JSON Data
     */
    public function productAction()
    {
        $queryBuilder = $this->entityManager->createQueryBuilder();
        $query = $queryBuilder->select(array(
            'product.productId as id',
            'product.name as text',
        ))
            ->from('Application\Entity\Product','product');
        $result = $query->getQuery()->getResult();
        return new JsonModel(array(
            "success" => "true",
            "items" => $result
        ));
    }
    
}
