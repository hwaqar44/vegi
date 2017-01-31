Ext.define('Vegi.view.admin.resource.Menu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.adminResourceMenu',
	
	require:[
		'Vegi.view.admin.resource.MenuViewModel'
	],

    viewModel: {
        type: 'adminResourceMenu'
    },

    title: 'Resources',

    iconCls: 'x-fa fa-user',

    floating: false,

    items: [
        {
            routeId: 'adminResourceAdd',
            params: {
                openWindow: true,
                windowCfg: {
                    title: 'Add Resource'
                }
            },
            iconCls: 'x-fa fa-plus',
            text: 'Add'
        },
        {
			routeId: 'adminResourceAdd',
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
            routeId: 'removeResource',
            iconCls: 'x-fa fa-trash-o',
            text: 'Batch Delete'
        }
    ]
});
