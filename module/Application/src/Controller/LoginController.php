<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

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
        $data = $this->params()->fromQuery();
        //$data['identity'] = 'asdf';
        //$data['password'] = 'asdf';
        if (isset($data) && !empty($data)) {
            if (!$authService->hasIdentity()) {
                $adapter = $authService->getAdapter();
                $adapter->setIdentity($data['identity']);
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
                        "success" => "true",
                        "user"=>$session->user,
                        "name"=>$session->userName,
                        "email"=>$session->userEmail,
                    ));
                } else{
                    return new JsonModel(array(
                        "success" => "false",
                        "item" => "username/password don't match",
                    ));
                }
            } else{
                $userId = $authService->getIdentity()->getUserId();
                $name = $authService->getIdentity()->getName();
                $email = $authService->getIdentity()->getEmail();
                return new JsonModel(array(
                    "success" => "true",
                    "user"=>$userId,
                    "name"=>$session->userName,
                    "email"=>$session->userEmail,
                ));
            }
        } else{
            return new JsonModel(array(
                "success" => "false",
                "item" => "Enter username/password please.",
            ));
        }
    }
}
