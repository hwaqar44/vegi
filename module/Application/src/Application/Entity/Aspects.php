<?php

namespace Application\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Aspects
 *
 * @ORM\Table(name="aspects", indexes={@ORM\Index(name="IDX_FFE9B34584665A", columns={"product_id"})})
 * @ORM\Entity
 */
class Aspects
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="smallint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="text", nullable=false)
     */
    private $name;

    /**
     * @var \Application\Entity\Products
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     * @ORM\OneToOne(targetEntity="Application\Entity\Products")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="product_id", referencedColumnName="id")
     * })
     */
    private $product;



    /**
     * Set id
     *
     * @param integer $id
     *
     * @return Aspects
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

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
     * Set name
     *
     * @param string $name
     *
     * @return Aspects
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set product
     *
     * @param \Application\Entity\Products $product
     *
     * @return Aspects
     */
    public function setProduct(\Application\Entity\Products $product)
    {
        $this->product = $product;

        return $this;
    }

    /**
     * Get product
     *
     * @return \Application\Entity\Products
     */
    public function getProduct()
    {
        return $this->product;
    }
}
