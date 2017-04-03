<?php

namespace ApplicationTest\Controller;

use Application\Controller\LoginController;
use Doctrine\ORM\EntityManager;
use Zend\Stdlib\ArrayUtils;
use Zend\Test\PHPUnit\Controller\AbstractHttpControllerTestCase;
use Zend\View\Model\JsonModel;

class GroupControllerTest extends AbstractHttpControllerTestCase
{
    public function setUp()
    {
        // The module configuration should still be applicable for tests.
        // You can override configuration here with test case specific values,
        // such as sample view templates, path stacks, module_listener_options,
        // etc.
        $configOverrides = [];

        $this->setApplicationConfig(ArrayUtils::merge(
            include __DIR__ . '/../../../../config/application.config.php',
            $configOverrides
        ));

        parent::setUp();
        $services = $this->getApplicationServiceLocator();
        $config = $services->get('config');
        unset($config['db']);
        $services->setAllowOverride(true);
        $services->setService('config', $config);
        $services->setAllowOverride(false);
    }
    public function testLoginActionCanBeAccessed()
    {
        $this->dispatch('/login');
        $this->assertModuleName('Application');
        $this->assertControllerName(LoginController::class);
        $this->assertControllerClass('LoginController');
        $this->assertMatchedRouteName('login');
    }
    public function testLogoutActionCanBeAccessed()
    {
        $this->dispatch('/logout');
        $this->assertModuleName('Application');
        $this->assertControllerName(LoginController::class);
        $this->assertControllerClass('LoginController');
        $this->assertMatchedRouteName('logout');
    }
    public function testLogoutActionCanLogout()
    {
        $this->dispatch('/logout');
        $this->assertModuleName('Application');
        $this->assertControllerName(LoginController::class);
        $this->assertControllerClass('LoginController');
        $this->assertMatchedRouteName('logout');
    }

    public function testLoginActionCanLoggedIn()
    {
        $postData = [
            'username'  => 'asdf',
            'password' => 'asdf'
        ];
        $this->dispatch('/login', 'POST', $postData);
        $this->assertResponseStatusCode(200);
    }

}
