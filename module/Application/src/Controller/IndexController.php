<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Application\Entity\Aspects;
use Application\Entity\Products;
use Doctrine\ORM\EntityManager;;

class IndexController extends AbstractActionController
{
	private $entityManager;
	
	public function __construct(EntityManager $em)
    {
			$this->entityManager = $em;
	}
	
    public function indexAction()
    {
		return new ViewModel();
    }
	
	
    public function aboutAction()
    {
		
		echo "This is index in IndexController";exit;
    }
}
