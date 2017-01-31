Ext.define('Vegi.view.admin.role.Menu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.adminRoleMenu',
	
	require:[
		'Vegi.view.admin.role.MenuViewModel'
	],

    viewModel: {
        type: 'adminRoleMenu'
    },

    title: 'Roles',

    iconCls: 'x-fa fa-user',

    floating: false,

    items: [
        {
            routeId: 'adminRoleAdd',
            params: {
                openWindow: true,
                windowCfg: {
                    title: 'Add Roles'
                }
            },
            iconCls: 'x-fa fa-plus',
            text: 'Add'
        },
        {
			routeId: 'adminRoleAdd',
            params: {
                openWindow: true,
                windowCfg: {
                    title: 'Add Roles'
                },
				edit: true
            },
            iconCls: 'x-fa fa-edit',
            text: 'Edit'
        },
        {
            routeId: 'removeRole',
            iconCls: 'x-fa fa-trash-o',
            text: 'Batch Delete'
        }
    ]
});
