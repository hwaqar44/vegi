<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Application\Entity\User;
use Doctrine\Common\Util\Debug;
use Doctrine\ORM\EntityManager;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\Session\Container;
use Zend\View\Model\JsonModel;

class LoginController extends AbstractActionController
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
	
    public function loginAction()
    {
        $authService = $this->authService;
        $authService->clearIdentity();
        $session = new Container('base');
        $session->getManager()->getStorage()->clear('base');
        $data = $this->params()->fromPost();
        //$data['identity'] = 'asdf';
        //$data['password'] = 'asdf';
        if (isset($data) && !empty($data)) {
            if (!$authService->hasIdentity()) {
                $adapter = $authService->getAdapter();
                $adapter->setIdentity($data['username']);
                //$adapter->setCredential($data['password']);
                $adapter->setCredential(md5($data['password']));
                $authResult = $authService->authenticate();
                if ($authResult->isValid()) {
                    $identity = $authResult->getIdentity();
                    $userId = $identity->getUserId();
                    $name = $identity->getName();
                    $email = $identity->getEmail();
                    $session->offsetSet('loginTime', time());
                    $session->offsetSet('user', $userId);
                    $session->offsetSet('userName', $name);
                    $session->offsetSet('userEmail', $email);
                    return new JsonModel(array(
                        "success" => true,
                        "user"=>$session->user,
                        "name"=>$session->userName,
                        "email"=>$session->userEmail,
                    ));
                } else{
                    return new JsonModel(array(
                        "success" => false,
                        "msg" => "username/password didn't match",
                    ));
                }
            } else{
                $userId = $authService->getIdentity()->getUserId();
                return new JsonModel(array(
                    "success" => true,
                    "user"=>$userId,
                    "name"=>$session->userName,
                    "email"=>$session->userEmail,
                ));
            }
        } else{
            return new JsonModel(array(
                "success" => false,
                "msg" => "Enter Username & Password please.",
            ));
        }
    }

    public function logoutAction()
    {
        $authService = $this->authService;
        $authService->clearIdentity();
        $session = new Container('base');
        $session->getManager()->getStorage()->clear('base');
        return new JsonModel(array("success" => true));
    }

    public function registerAction()
    {
        $data = $this->params()->fromPost();
        $queryBuilder = $this->entityManager->createQueryBuilder();
        $query = $queryBuilder->select(array(
            'user.userId as userId',
        ))
            ->from('Application\Entity\User','user')
            ->where('user.email = :email')
            ->orWhere('user.username = :username')
            ->setParameter('email',$data['email'])
            ->setParameter('username',$data['username']);
        $result = $query->getQuery()->getResult();
       if (!$result){
           $user = new User();
           $user->setUsername($data['username']);
           $user->setPassword(md5($data['password']));
           $user->setName($data['name']);
           $user->setEmail($data['email']);
           $this->entityManager->persist($user);
           $this->entityManager->flush();
           return new JsonModel(array(
               "success" => true,
               "msg" => "Request sent to Admin, Wait for response.",
           ));
       }else{
           return new JsonModel(array(
               "success" => true,
               "msg" => "User Already Exist.",
           ));
       }
    }

    public function forgotAction()
    {
        $data = $this->params()->fromPost();
        $email = $this->params()->fromPost('reEmail',false);
        if (isset($data) && !empty($email)){
            $queryBuilder = $this->entityManager->createQueryBuilder();
            $query = $queryBuilder->select(array(
                'user.email as email',
            ))
                ->from('Application\Entity\User','user')
                ->where('user.email = :email')
                ->setParameter('email',$data['email']);
            $result = $query->getQuery()->getResult();
            if ($result){
                //send email for recovery, click and reset your password
            } else{
                return new JsonModel(array(
                    "success" => true,
                    "msg" => "Email you entered doesn't exits.",
                ));
            }
        }

    }

    public function recoverAction()
    {
        // Check if user is from the link we had given
        // then show him the window for recover password
    }

    public function resetAction()
    {
        // session will save userId coming from the link clicked
        // reset password for that user

        $session = new Container('recovery');
        $userId = $session->userId;
        $password = $this->params()->fromPost('password', false);
        if ($userId) {
            if ($password) {
                $user = $this->entityManager->find('Application\Entity\User', $userId);
                $user->setPassword(md5($password));
                $this->entityManager->persist($user);
                $this->entityManager->flush();
                return new JsonModel(array(
                    "success" => true,
                    "msg" => "Password was reset successfully.",
                ));
                // send email again for password reset
            } else {
                return new JsonModel(array(
                    "success" => false,
                    "msg" => "Enter valid password.",
                ));
            }
        } else{
            return new JsonModel(array(
                "success" => false,
                "msg" => "You are not from the same planet, Are you?.",
            ));
        }
    }

}
