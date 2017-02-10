<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonModule for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Production\Controller;

use Application\Entity\Category;
use Doctrine\ORM\EntityManager;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\JsonModel;

class CategoryController extends AbstractActionController
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
            'category.categoryId as id',
            'category.name as name',
            'category.details as details',
        ))
            ->from('Application\Entity\Category','category');
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
            $category = $this->entityManager->find('Application\Entity\Category',$data['id']);
        } else{
            $category = new Category();
        }

        $category->setName($data['name']);
        $category->setDetails($data['detail']);

        if ($update){
            $this->entityManager->merge($category);
            $msg = "Category updated successfully.";
        } else{
            $this->entityManager->persist($category);
            $msg = "Category added successfully.";
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
            'category.categoryId as id',
            'category.name as name',
            'category.details as detail',
        ))
            ->from('Application\Entity\Category','category')
            ->where('category.categoryId = :id')
            ->setParameter('id',$id);
        $result = $query->getQuery()->getResult();
        return new JsonModel(array(
            "success" => "true",
            "item" => $result
        ));
    }
	
	 /**
	 * load all categories
	 * @return JsonModel JSON Data
	 */
    public function categoryAction()
    {
        $queryBuilder = $this->entityManager->createQueryBuilder();
        $query = $queryBuilder->select(array(
            'category.categoryId as id',
            'category.name as text',
        ))
            ->from('Application\Entity\Category','category');
        $result = $query->getQuery()->getResult();
        return new JsonModel(array(
            "success" => "true",
            "items" => $result
        ));
    }
    
}
