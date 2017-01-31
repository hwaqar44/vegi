<?php
namespace Admin;

use Application\Controller\Factory\EntityManagerControllerFactory;
use Zend\Router\Http\Segment;
use Zend\ServiceManager\Factory\InvokableFactory;

return [
    'controllers' => [
        'factories' => [
            Controller\RoleController::class => EntityManagerControllerFactory::class,
            Controller\GroupController::class => EntityManagerControllerFactory::class,
            Controller\ResourceController::class => EntityManagerControllerFactory::class,
            Controller\PermissionController::class => EntityManagerControllerFactory::class,
        ],
    ],
    'router' => [
        'routes' => [
            'role' => [
                'type'    => Segment::class,
                'options' => [
                    // Change this to something specific to your module
                    'route'    => '/role[/:action]',
                    'defaults' => [
                        'controller'    => Controller\RoleController::class,
                        'action'        => 'load',
                    ],
                ]
            ],
            'group' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/group[/:action]',
                    'defaults' => [
                        'controller'    => Controller\GroupController::class,
                        'action'        => 'load',
                    ],
                ]
            ],
            'resource' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/resource[/:action]',
                    'defaults' => [
                        'controller'    => Controller\ResourceController::class,
                        'action'        => 'load',
                    ],
                ]
            ],
            'permission' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/permission[/:action]',
                    'defaults' => [
                        'controller'    => Controller\PermissionController::class,
                        'action'        => 'load',
                    ],
                ]
            ],
        ],
    ],
    'view_manager' => [
        'template_path_stack' => [
            'Admin' => __DIR__ . '/../view',
        ],
        'strategies' => [
            'ViewJsonStrategy',
        ],
    ],
];
