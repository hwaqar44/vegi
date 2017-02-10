Ext.define('Vegi.view.admin.role.Role', {
    extend: 'Ext.panel.Panel',
    xtype: 'adminRole',
	
	require:[
		'Vegi.view.admin.role.RoleModel',
		'Vegi.view.admin.role.RoleController',
		'Vegi.view.admin.role.Search',
		'Vegi.view.admin.role.Grid',
		'Vegi.view.admin.role.Add',
		'Vegi.view.admin.role.View',
		'Ext.panel.Panel',
	],

    controller: 'adminRole',

    viewModel: {
        type: 'adminRole'
    },

    layout: 'border',
    items: [
		{
			xtype: 'adminrolegrid',
			region: 'center'	
		},
		{
			xtype: 'adminrolesearch',
			region: 'west'
		}
	]
});
