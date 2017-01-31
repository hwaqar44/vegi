Ext.define('Vegi.view.admin.group.Menu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.adminGroupMenu',
	
	require:[
		'Vegi.view.admin.group.MenuViewModel'
	],

    viewModel: {
        type: 'adminGroupMenu'
    },

    title: 'Groups',

    iconCls: 'x-fa fa-user',

    floating: false,

    items: [
        {
            routeId: 'adminGroupAdd',
            params: {
                openWindow: true,
                windowCfg: {
                    title: 'Add Groups'
                }
            },
            iconCls: 'x-fa fa-plus',
            text: 'Add'
        },
        {
			routeId: 'adminGroupAdd',
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
            routeId: 'removeGroup',
            iconCls: 'x-fa fa-trash-o',
            text: 'Batch Delete'
        }
    ]
});
