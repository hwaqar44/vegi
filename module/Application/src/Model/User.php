<?php

namespace Application\Model;

class User {

    /**
     * @var
     */
    private $entityManager;

    /**
     * User constructor.
     * @param $entityManager
     */
    public function __construct($entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @param array $data
     * @param bool|int $id for updattion
     * @return int $userId
     */
    public function create($data, $id = false)
    {
        $update = false;
       if ($id && !empty($id)){
           $update = true;
           $this->entityManager->find('Application\Entity\User',$id);
       } else{
           $user = new \Application\Entity\User();
       }

        $user->setName($data['name']);
        $user->setEmail($data['email']);
        $user->setPassword(md5($data['password']));
        $user->setUsername($data['username']);

        if ($update){
            $this->entityManager->merge($user);
        } else{
            $this->entityManager->persist($user);
        }
        $this->entityManager->flush();

        return $user->getUserId();
    }

    /**
     * Return all users
     * return array $users
     */
    public function findAll()
    {
        $queryBuilder = $this->entityManager->createQueryBuilder();
        $query = $queryBuilder->select(array(
            "user.userId as userId",
            "user.name as name",
            "user.username as username",
            "user.email as email",
        ))
            ->from('Application\Entity\User','user');
        
        $users = $query->getQuery()->getScalarResult();
        return $users;
    }

    /**
     * Return all users Based on Give array
     * @param $array Array of Type array(array(user=>'name',name=>'name'),
     * return array $users
     */
    public function findAllBy(array $array)
    {
        $queryBuilder = $this->entityManager->createQueryBuilder();
        $query = $queryBuilder->select(array(
            "user.userId as userId",
            "user.name as name",
            "user.username as username",
            "user.email as email",
        ))
            ->from('Application\Entity\User','user')
            ->where('user.userId != :nullValue')
            ->setParameter('nullValue',null);
        if ($array){
            $i = 0;
            foreach ($array as $key=>$value){
                $query->andWhere('user.'.$key.' = :value'.$i)
                    ->setParameter('value'.$i, $value);
            }
        }
        
        $users = $query->getQuery()->getScalarResult();
        return $users;
    }
}