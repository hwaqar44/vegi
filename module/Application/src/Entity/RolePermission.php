<?php

namespace Application\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * RolePermission
 *
 * @ORM\Table(name="role_permission", indexes={@ORM\Index(name="resource_id", columns={"resource_id"}), @ORM\Index(name="permission_id", columns={"permission_id"}), @ORM\Index(name="IDX_6F7DF886D60322AC", columns={"role_id"})})
 * @ORM\Entity
 */
class RolePermission
{
    /**
     * @var \Application\Entity\Role
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     * @ORM\OneToOne(targetEntity="Application\Entity\Role")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="role_id", referencedColumnName="role_id")
     * })
     */
    private $role;

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
     * Set role
     *
     * @param \Application\Entity\Role $role
     *
     * @return RolePermission
     */
    public function setRole(\Application\Entity\Role $role)
    {
        $this->role = $role;

        return $this;
    }

    /**
     * Get role
     *
     * @return \Application\Entity\Role
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * Set resource
     *
     * @param \Application\Entity\Resource $resource
     *
     * @return RolePermission
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
     * @return RolePermission
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
