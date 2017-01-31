Ext.define('Vegi.view.admin.role.Role', {
    extend: 'Ext.container.Container',
    xtype: 'adminRole',
	
	require:[
		'Vegi.view.admin.role.RoleModel',
		'Vegi.view.admin.role.RoleController',
	],

    controller: 'adminRole',

    viewModel: {
        type: 'adminRole'
    },

    itemId: 'adminRoleContainer',

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
                    xtype: 'adminRoleMenu',
                    listeners: {
                        click: 'onMenuClick'
                    }
                },
                {
                    //xtype: 'adminRoleList'
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
            },
			items:[
				{
					xtype: 'grid',
					cls: 'email-inbox-panel shadow',
					bind: {
						store: '{role}'
					},
					viewConfig: {
						preserveScrollOnRefresh: true,
						preserveScrollOnReload: true
					},

					selModel: {
						selType: 'checkboxmodel',
						checkOnly: true,
						showHeaderCheckbox: true
					},

					listeners: {
						cellclick: 'onGridCellItemClick'
					},
					headerBorders: false,
					rowLines: false,

					columns: [
						{
							dataIndex: 'id',
							menuDisabled: true,
							text: 'ID',
							width: 40,
						},
						{
							dataIndex: 'name',
							text: 'Name',
							width: 140
						},
						{
							dataIndex: 'code',
							text: 'code',
							width: 140
						},
						{
							dataIndex: 'details',
							text: 'Description',
							flex: 1
						}
					]
									
				}
			]
		}
	]
});
