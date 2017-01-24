<?php 
namespace Application\Controller\Factory;

use Doctrine\Common\Util\Debug;
use Zend\ServiceManager\Factory\FactoryInterface;
use Zend\ServiceManager\ServiceLocatorInterface;
use Interop\Container\ContainerInterface;
use Application\Controller\IndexController;

// Factory class
class EntityManagerControllerFactory implements FactoryInterface
{
    public function __invoke(ContainerInterface $container, $requestedName, Array $options = null) {
        $auth = $container->get('doctrine.authenticationservice.orm_default');
        $entityManager = $container->get('doctrine.entitymanager.orm_default');
        return new $requestedName($entityManager, $auth);
    }
	
}