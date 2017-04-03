<?php

namespace ApplicationTest\Controller;

use Admin\Controller\GroupController;
use Application\Controller\LoginController;
use Doctrine\ORM\EntityManager;
use Zend\Stdlib\ArrayUtils;
use Zend\Test\PHPUnit\Controller\AbstractHttpControllerTestCase;

class GroupControllerTest extends AbstractHttpControllerTestCase
{
    protected $traceError = true;
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
        $config['doctrine']['connection']['orm_default']['params']['dbname']   = 'vegi_test';
        $services->setAllowOverride(true);
        $services->setService('config', $config);
        $services->setAllowOverride(false);
    }
    public function testLoadActionCanBeAccessed()
    {
        $this->dispatch('/group/load');
        $this->assertModuleName('Admin');
        $this->assertControllerName(GroupController::class);
        $this->assertControllerClass('GroupController');
        $this->assertActionName('load');
        $this->assertMatchedRouteName('group');
    }
    public function testsaveActionCanBeAccessed()
    {
        $this->dispatch('/group/save');
        $this->assertModuleName('Admin');
        $this->assertControllerName(GroupController::class);
        $this->assertControllerClass('GroupController');
        $this->assertActionName('save');
        $this->assertMatchedRouteName('group');
    }

    /*public function testSaveActionCanSave()
    {
        $postData = [
            'name'  => 'Test Group',
            'code'  => 'TG',
            'details' => 'Test Group Details'
        ];
        $this->dispatch('/group/save', 'POST', $postData);
        $this->assertResponseStatusCode(200);

    }
    public function testSaveActionCanUpdate()
    {
        $postData = [
            'id'  => 1,
            'name'  => 'Test updated',
            'code'  => 'TGU',
            'details' => 'Test Group Details'
        ];
        $this->dispatch('/group/save', 'POST', $postData);
        $this->assertResponseStatusCode(200);

    }
    public function testRemoveActionCanRemove()
    {
        $postData = [
            'id'  => array(1),
        ];
        $this->dispatch('/group/remove', 'POST', $postData);
        $this->assertResponseStatusCode(200);

    }*/

    public function testrecordActionCanBeAccessed()
    {
        $this->dispatch('/group/record');
        $this->assertModuleName('Admin');
        $this->assertControllerName(GroupController::class);
        $this->assertControllerClass('GroupController');
        $this->assertActionName('record');
        $this->assertMatchedRouteName('group');
    }
    public function testremoveActionCanBeAccessed()
    {
        $this->dispatch('/group/remove');
        $this->assertModuleName('Admin');
        $this->assertControllerName(GroupController::class);
        $this->assertControllerClass('GroupController');
        $this->assertActionName('remove');
        $this->assertMatchedRouteName('group');
    }

}
