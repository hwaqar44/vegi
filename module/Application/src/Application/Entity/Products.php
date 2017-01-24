<?php

namespace Application\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Products
 *
 * @ORM\Table(name="products")
 * @ORM\Entity
 */
class Products
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="bigint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var integer
     *
     * @ORM\Column(name="aspectsCount", type="smallint", nullable=false)
     */
    private $aspectscount;



    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set aspectscount
     *
     * @param integer $aspectscount
     *
     * @return Products
     */
    public function setAspectscount($aspectscount)
    {
        $this->aspectscount = $aspectscount;

        return $this;
    }

    /**
     * Get aspectscount
     *
     * @return integer
     */
    public function getAspectscount()
    {
        return $this->aspectscount;
    }
}
