Ext.define('Vegi.view.admin.Admin', {
    extend: 'Ext.container.Container',
    xtype: 'admin',
	
	require:[
		'Vegi.view.admin.AdminModel',
		'Vegi.view.admin.AdminController',
	],

    controller: 'admin',

    viewModel: {
        type: 'admin'
    },

    itemId: 'adminMainContainer',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    margin: '20 0 0 20',

    items: [
        {
            xtype: 'container',

            itemId: 'navigationPanel',

            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            width: '30%',
            minWidth: 180,
            maxWidth: 240,

            defaults: {
                cls: 'navigation-email',
                margin: '0 20 20 0'
            },

            items: [
                {
                    xtype: 'adminMenu',
                    listeners: {
                        click: 'onMenuClick'
                    }
                },
                {
                    xtype: 'adminList'
                }
            ]
        },
        {
            xtype: 'container',
            itemId: 'contentPanel',
            margin: '0 20 20 0',
            flex: 1,
            layout: {
                type : 'anchor',
                anchor : '100%'
            }
        }
    ]
});
