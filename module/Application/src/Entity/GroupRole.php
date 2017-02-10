<?php

namespace Application\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * GroupRole
 *
 * @ORM\Table(name="group_role", indexes={@ORM\Index(name="group_id", columns={"group_id", "role_id"}), @ORM\Index(name="role_id", columns={"role_id"}), @ORM\Index(name="IDX_7E33D11AFE54D947", columns={"group_id"})})
 * @ORM\Entity
 */
class GroupRole
{
    /**
     * @var integer
     *
     * @ORM\Column(name="group_role_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $groupRoleId;

    /**
     * @var \Application\Entity\Groups
     *
     * @ORM\ManyToOne(targetEntity="Application\Entity\Groups")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="group_id", referencedColumnName="group_id")
     * })
     */
    private $group;

    /**
     * @var \Application\Entity\Role
     *
     * @ORM\ManyToOne(targetEntity="Application\Entity\Role", inversedBy="groupRole")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="role_id", referencedColumnName="role_id")
     * })
     */
    private $role;



    /**
     * Get groupRoleId
     *
     * @return integer
     */
    public function getGroupRoleId()
    {
        return $this->groupRoleId;
    }

    /**
     * Set group
     *
     * @param \Application\Entity\Groups $group
     *
     * @return GroupRole
     */
    public function setGroup(\Application\Entity\Groups $group = null)
    {
        $this->group = $group;

        return $this;
    }

    /**
     * Get group
     *
     * @return \Application\Entity\Groups
     */
    public function getGroup()
    {
        return $this->group;
    }

    /**
     * Set role
     *
     * @param \Application\Entity\Role $role
     *
     * @return GroupRole
     */
    public function setRole(\Application\Entity\Role $role = null)
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
}
