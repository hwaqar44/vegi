<?php

namespace Application\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Production
 *
 * @ORM\Table(name="production", indexes={@ORM\Index(name="category_id", columns={"category_id", "product_id", "area_id"}), @ORM\Index(name="product_id", columns={"product_id"}), @ORM\Index(name="area_id", columns={"area_id"}), @ORM\Index(name="IDX_D3EDB1E012469DE2", columns={"category_id"})})
 * @ORM\Entity
 */
class Production
{
    /**
     * @var integer
     *
     * @ORM\Column(name="production_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $productionId;

    /**
     * @var string
     *
     * @ORM\Column(name="batch_no", type="string", length=255, nullable=false)
     */
    private $batchNo;

    /**
     * @var integer
     *
     * @ORM\Column(name="no_of_plants", type="integer", nullable=false)
     */
    private $noOfPlants;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="sowing_date", type="datetime", nullable=false)
     */
    private $sowingDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="harvesting_start", type="datetime", nullable=false)
     */
    private $harvestingStart;

    /**
     * @var string
     *
     * @ORM\Column(name="estimated_yield", type="string", length=255, nullable=false)
     */
    private $estimatedYield;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="harvesting_start_date", type="datetime", nullable=false)
     */
    private $harvestingStartDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="harvesting_end_date", type="datetime", nullable=false)
     */
    private $harvestingEndDate;

    /**
     * @var string
     *
     * @ORM\Column(name="status", type="string", nullable=true)
     */
    private $status = 'active';

    /**
     * @var \Application\Entity\Category
     *
     * @ORM\ManyToOne(targetEntity="Application\Entity\Category")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="category_id", referencedColumnName="category_id")
     * })
     */
    private $category;

    /**
     * @var \Application\Entity\Product
     *
     * @ORM\ManyToOne(targetEntity="Application\Entity\Product")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="product_id", referencedColumnName="product_id")
     * })
     */
    private $product;

    /**
     * @var \Application\Entity\Area
     *
     * @ORM\ManyToOne(targetEntity="Application\Entity\Area")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="area_id", referencedColumnName="area_id")
     * })
     */
    private $area;



    /**
     * Get productionId
     *
     * @return integer
     */
    public function getProductionId()
    {
        return $this->productionId;
    }

    /**
     * Set batchNo
     *
     * @param string $batchNo
     *
     * @return Production
     */
    public function setBatchNo($batchNo)
    {
        $this->batchNo = $batchNo;

        return $this;
    }

    /**
     * Get batchNo
     *
     * @return string
     */
    public function getBatchNo()
    {
        return $this->batchNo;
    }

    /**
     * Set noOfPlants
     *
     * @param integer $noOfPlants
     *
     * @return Production
     */
    public function setNoOfPlants($noOfPlants)
    {
        $this->noOfPlants = $noOfPlants;

        return $this;
    }

    /**
     * Get noOfPlants
     *
     * @return integer
     */
    public function getNoOfPlants()
    {
        return $this->noOfPlants;
    }

    /**
     * Set sowingDate
     *
     * @param \DateTime $sowingDate
     *
     * @return Production
     */
    public function setSowingDate($sowingDate)
    {
        $this->sowingDate = $sowingDate;

        return $this;
    }

    /**
     * Get sowingDate
     *
     * @return \DateTime
     */
    public function getSowingDate()
    {
        return $this->sowingDate;
    }

    /**
     * Set harvestingStart
     *
     * @param \DateTime $harvestingStart
     *
     * @return Production
     */
    public function setHarvestingStart($harvestingStart)
    {
        $this->harvestingStart = $harvestingStart;

        return $this;
    }

    /**
     * Get harvestingStart
     *
     * @return \DateTime
     */
    public function getHarvestingStart()
    {
        return $this->harvestingStart;
    }

    /**
     * Set estimatedYield
     *
     * @param string $estimatedYield
     *
     * @return Production
     */
    public function setEstimatedYield($estimatedYield)
    {
        $this->estimatedYield = $estimatedYield;

        return $this;
    }

    /**
     * Get estimatedYield
     *
     * @return string
     */
    public function getEstimatedYield()
    {
        return $this->estimatedYield;
    }

    /**
     * Set harvestingStartDate
     *
     * @param \DateTime $harvestingStartDate
     *
     * @return Production
     */
    public function setHarvestingStartDate($harvestingStartDate)
    {
        $this->harvestingStartDate = $harvestingStartDate;

        return $this;
    }

    /**
     * Get harvestingStartDate
     *
     * @return \DateTime
     */
    public function getHarvestingStartDate()
    {
        return $this->harvestingStartDate;
    }

    /**
     * Set harvestingEndDate
     *
     * @param \DateTime $harvestingEndDate
     *
     * @return Production
     */
    public function setHarvestingEndDate($harvestingEndDate)
    {
        $this->harvestingEndDate = $harvestingEndDate;

        return $this;
    }

    /**
     * Get harvestingEndDate
     *
     * @return \DateTime
     */
    public function getHarvestingEndDate()
    {
        return $this->harvestingEndDate;
    }

    /**
     * Set status
     *
     * @param string $status
     *
     * @return Production
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Get status
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set category
     *
     * @param \Application\Entity\Category $category
     *
     * @return Production
     */
    public function setCategory(\Application\Entity\Category $category = null)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get category
     *
     * @return \Application\Entity\Category
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Set product
     *
     * @param \Application\Entity\Product $product
     *
     * @return Production
     */
    public function setProduct(\Application\Entity\Product $product = null)
    {
        $this->product = $product;

        return $this;
    }

    /**
     * Get product
     *
     * @return \Application\Entity\Product
     */
    public function getProduct()
    {
        return $this->product;
    }

    /**
     * Set area
     *
     * @param \Application\Entity\Area $area
     *
     * @return Production
     */
    public function setArea(\Application\Entity\Area $area = null)
    {
        $this->area = $area;

        return $this;
    }

    /**
     * Get area
     *
     * @return \Application\Entity\Area
     */
    public function getArea()
    {
        return $this->area;
    }
}
