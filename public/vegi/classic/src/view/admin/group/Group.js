Ext.define('Vegi.view.admin.group.Group', {
    extend: 'Ext.panel.Panel',
    xtype: 'adminGroup',
	
	require:[
		'Vegi.view.admin.group.GroupModel',
		'Vegi.view.admin.group.GroupController',
		'Vegi.view.admin.group.Search',
		'Vegi.view.admin.group.Grid',
		'Ext.panel.Panel',
	],

    controller: 'adminGroup',

    viewModel: {
        type: 'adminGroup'
    },

    layout: 'border',
    items: [
		{
			xtype: 'admingroupgrid',
			region: 'center'	
		},
		{
			xtype: 'admingroupsearch',
			region: 'west'
		}
	]
});
