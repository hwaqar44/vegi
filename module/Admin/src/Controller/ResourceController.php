<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonModule for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Admin\Controller;

use Application\Entity\Resource;
use Application\Entity\Role;
use Doctrine\ORM\EntityManager;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\JsonModel;

class ResourceController extends AbstractActionController
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
     * RoleController constructor.
     * @param EntityManager $em
     * @param $auth
     */
    public function __construct(EntityManager $em, $auth)
    {
        $this->entityManager = $em;
        $this->authService = $auth;
    }


    public function loadAction()
    {
        $queryBuilder = $this->entityManager->createQueryBuilder();
        $query = $queryBuilder->select(array(
            'res.resourceId as id',
            'res.name as name',
            'res.details as details',
        ))
            ->from('Application\Entity\Resource','res');
        $result = $query->getQuery()->getResult();
        return new JsonModel(array(
            "success" => "true",
            "items" => $result
        ));
    }

    /**
     * Save/Update a Role
     */
    public function saveAction()
    {
        $data = $this->params()->fromPost();
        $update = false;
        $msg = "Operation failed, please contact your admin.";
        if (isset($data['id']) && !empty($data['id'])){
            $update = true;
            $res = $this->entityManager->find('Application\Entity\Resource',$data['id']);
        } else{
            $res = new Resource();
        }

        $res->setName($data['name']);
        $res->setDetails($data['details']);

        if ($update){
            $this->entityManager->merge($res);
            $msg = "Resource updated successfully.";
        } else{
            $this->entityManager->persist($res);
            $msg = "Resource added successfully.";
        }
        $this->entityManager->flush();

        return new JsonModel(array(
            "success" => "true",
            "msg" => $msg
        ));
    }

    /**
     * load single Role Row by Given Id
     * @param $id
     */
    public function recordAction()
    {
        $id = $this->params()->fromQuery('id', false);
        $queryBuilder = $this->entityManager->createQueryBuilder();
        $query = $queryBuilder->select(array(
            'res.resourceId as id',
            'res.name as name',
            'res.details as details',
        ))
            ->from('Application\Entity\Resource','res')
            ->where('res.resourceId = :id')
            ->setParameter('id',$id);
        $result = $query->getQuery()->getResult();
        return new JsonModel(array(
            "success" => "true",
            "item" => $result
        ));
    }

    /**
     * Remove records from Role based on given $ids
     */
    public function removeAction()
    {
        $ids = $this->params()->fromPost('id', false);
        $i = 0;
        foreach ($ids as $id){
            $res = $this->entityManager->find('Application\Entity\Resource',$id);
            $this->entityManager->remove($res);
            $this->entityManager->flush();
            $i++;
        }
        return new JsonModel(array(
            "success" => "true",
            "msg" => $i . " items removed from Resource."
        ));
    }
}
