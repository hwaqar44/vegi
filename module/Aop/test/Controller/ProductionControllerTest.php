<?php

namespace ApplicationTest\Controller;

use Admin\Controller\GroupController;
use Application\Controller\LoginController;
use Doctrine\ORM\EntityManager;
use Production\Controller\AreaController;
use Production\Controller\CategoryController;
use Production\Controller\ProductController;
use Production\Controller\ProductionController;
use Zend\Stdlib\ArrayUtils;
use Zend\Test\PHPUnit\Controller\AbstractHttpControllerTestCase;

class ProductionControllerTest extends AbstractHttpControllerTestCase
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
        $this->dispatch('/production/load');
        $this->assertModuleName('Production');
        $this->assertControllerName(ProductionController::class);
        $this->assertControllerClass('ProductionController');
        $this->assertActionName('load');
        $this->assertMatchedRouteName('production');
    }
    public function testsaveActionCanBeAccessed()
    {
        $this->dispatch('/production/save');
        $this->assertModuleName('Production');
        $this->assertControllerName(ProductionController::class);
        $this->assertControllerClass('ProductionController');
        $this->assertActionName('save');
        $this->assertMatchedRouteName('production');
    }

      public function testrecordActionCanBeAccessed()
     {
         $this->dispatch('/production/record');
         $this->assertModuleName('Production');
         $this->assertControllerName(ProductionController::class);
         $this->assertControllerClass('ProductionController');
         $this->assertActionName('record');
         $this->assertMatchedRouteName('production');
     }

    public function testSaveActionCanSave()
    {
        $postData = [
            'area'  => '1',
            'category' => '1',
            'batchNo' => '2221',
            'estimatedYield' => '1',
            'noOfPlant' => '1',
            'harvestingEndDate' => date('Y-m-d H:i:s'),
            'harvestingStartDate' => date('Y-m-d H:i:s'),
            'harvestingStart' => date('Y-m-d H:i:s'),
            'sowingDate' => date('Y-m-d H:i:s'),
            'product' => '1'
        ];
        $this->dispatch('/production/save', 'POST', $postData);
        $this->assertResponseStatusCode(200);
        $this->assertJson($this->getResponse()->getBody());

    }
    public function testSaveActionCanUpdate()
    {
        $postData = [
            'id'  => 1,
            'area'  => '1',
            'category' => '1',
            'batchNo' => '2221',
            'estimatedYield' => '1',
            'noOfPlant' => '12',
            'harvestingEndDate' => date('Y-m-d H:i:s'),
            'harvestingStartDate' => date('Y-m-d H:i:s'),
            'harvestingStart' => date('Y-m-d H:i:s'),
            'sowingDate' => date('Y-m-d H:i:s'),
            'product' => '1'
        ];
        $this->dispatch('/production/save', 'POST', $postData);
        $this->assertResponseStatusCode(200);
        $this->assertJson($this->getResponse()->getBody());
    }
    /*public function testRemoveActionCanRemove()
     {
         $postData = [
             'id'  => array(1),
         ];
         $this->dispatch('/group/remove', 'POST', $postData);
         $this->assertResponseStatusCode(200);

     }*/


}
