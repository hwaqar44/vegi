<?php

namespace Application\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * GroupPermission
 *
 * @ORM\Table(name="group_permission", indexes={@ORM\Index(name="resource_id", columns={"resource_id"}), @ORM\Index(name="permission_id", columns={"permission_id"}), @ORM\Index(name="IDX_3784F318500376A0", columns={"group_role_id"})})
 * @ORM\Entity
 */
class GroupPermission
{
    /**
     * @var \Application\Entity\GroupRole
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     * @ORM\OneToOne(targetEntity="Application\Entity\GroupRole")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="group_role_id", referencedColumnName="group_role_id")
     * })
     */
    private $groupRole;

    /**
     * @var \Application\Entity\Resource
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     * @ORM\OneToOne(targetEntity="Application\Entity\Resource")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="resource_id", referencedColumnName="resource_id")
     * })
     */
    private $resource;

    /**
     * @var \Application\Entity\Permission
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     * @ORM\OneToOne(targetEntity="Application\Entity\Permission")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="permission_id", referencedColumnName="permission_id")
     * })
     */
    private $permission;



    /**
     * Set groupRole
     *
     * @param \Application\Entity\GroupRole $groupRole
     *
     * @return GroupPermission
     */
    public function setGroupRole(\Application\Entity\GroupRole $groupRole)
    {
        $this->groupRole = $groupRole;

        return $this;
    }

    /**
     * Get groupRole
     *
     * @return \Application\Entity\GroupRole
     */
    public function getGroupRole()
    {
        return $this->groupRole;
    }

    /**
     * Set resource
     *
     * @param \Application\Entity\Resource $resource
     *
     * @return GroupPermission
     */
    public function setResource(\Application\Entity\Resource $resource)
    {
        $this->resource = $resource;

        return $this;
    }

    /**
     * Get resource
     *
     * @return \Application\Entity\Resource
     */
    public function getResource()
    {
        return $this->resource;
    }

    /**
     * Set permission
     *
     * @param \Application\Entity\Permission $permission
     *
     * @return GroupPermission
     */
    public function setPermission(\Application\Entity\Permission $permission)
    {
        $this->permission = $permission;

        return $this;
    }

    /**
     * Get permission
     *
     * @return \Application\Entity\Permission
     */
    public function getPermission()
    {
        return $this->permission;
    }
}
