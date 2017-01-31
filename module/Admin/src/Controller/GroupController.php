<?php
namespace Admin\Controller;

use Application\Entity\Groups;
use Application\Entity\Role;
use Doctrine\ORM\EntityManager;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\JsonModel;

class GroupController extends AbstractActionController
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
            'grp.groupId as id',
            'grp.name as name',
            'grp.code as code',
            'grp.details as details',
        ))
            ->from('Application\Entity\Groups','grp');
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
            $group = $this->entityManager->find('Application\Entity\Groups',$data['id']);
        } else{
            $group = new Groups();
        }

        $group->setName($data['name']);
        $group->setCode($data['code']);
        $group->setDetails($data['details']);

        if ($update){
            $this->entityManager->merge($group);
            $msg = "Group updated successfully.";
        } else{
            $this->entityManager->persist($group);
            $msg = "Group added successfully.";
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
            'grp.groupId as id',
            'grp.name as name',
            'grp.code as code',
            'grp.details as details',
        ))
            ->from('Application\Entity\Groups','grp')
            ->where('grp.groupId = :id')
            ->setParameter('id',$id);
        $result = $query->getQuery()->getResult();
        return new JsonModel(array(
            "success" => "true",
            "item" => $result
        ));
    }

    /**
     * Remove records from Group based on given $ids
     */
    public function removeAction()
    {
        $ids = $this->params()->fromPost('id', false);
        $i = 0;
        foreach ($ids as $id){
            $group = $this->entityManager->find('Application\Entity\Groups',$id);
            $this->entityManager->remove($group);
            $this->entityManager->flush();
            $i++;
        }
        return new JsonModel(array(
            "success" => "true",
            "msg" => $i . " items removed from Groups."
        ));
    }
}
