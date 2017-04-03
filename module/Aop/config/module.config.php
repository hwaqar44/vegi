<?php
namespace Production;

use Application\Controller\Factory\EntityManagerControllerFactory;
use Zend\Cache\Storage\Adapter\Session;
use Zend\Router\Http\Segment;
use Zend\ServiceManager\Factory\InvokableFactory;

return [
    'controllers' => [
        'factories' => [
            Controller\CategoryController::class => EntityManagerControllerFactory::class,
            Controller\ProductController::class => EntityManagerControllerFactory::class,
            Controller\AreaController::class => EntityManagerControllerFactory::class,
            Controller\ProductionController::class => EntityManagerControllerFactory::class,
        ],
    ],
    'router' => [
        'routes' => [
            'category' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/category[/:action]',
                    'defaults' => [
                        'controller'    => Controller\CategoryController::class,
                        'action'        => 'load',
                    ],
                ]
            ],
            'product' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/product[/:action]',
                    'defaults' => [
                        'controller'    => Controller\ProductController::class,
                        'action'        => 'load',
                    ],
                ]
            ],
            'area' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/area[/:action]',
                    'defaults' => [
                        'controller'    => Controller\AreaController::class,
                        'action'        => 'load',
                    ],
                ]
            ],
            'production' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/production[/:action]',
                    'defaults' => [
                        'controller'    => Controller\ProductionController::class,
                        'action'        => 'load',
                    ],
                ]
            ],
            'subcategory' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/subcategory[/:action]',
                    'defaults' => [
                        'controller'    => Controller\SubCategoryController::class,
                        'action'        => 'load',
                    ],
                ]
            ],
        ],
    ],
    'view_manager' => [
        'template_path_stack' => [
            'ZendSkeletonModule' => __DIR__ . '/../view',
        ],
    ],
];
