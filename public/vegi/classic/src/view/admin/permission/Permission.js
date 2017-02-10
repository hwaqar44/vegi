Ext.define('Vegi.view.admin.permission.Permission', {
    extend: 'Ext.panel.Panel',
    xtype: 'adminPermission',
	
	require:[
		'Vegi.view.admin.permission.PermissionModel',
		'Vegi.view.admin.permission.PermissionController',
		'Vegi.view.admin.permission.Grid',
		'Vegi.view.admin.permission.Search',
		'Vegi.view.admin.permission.Add', 
		'Ext.panel.Panel'
	],

    controller: 'adminPermission',

    viewModel: {
        type: 'adminPermission'
    },

    layout: 'border',
	items: [
		{
			xtype: 'adminresourcegrid',
			region: 'center'	
		},
		{
			xtype: 'adminresourcesearch',
			region: 'west'
		}
	]
});
