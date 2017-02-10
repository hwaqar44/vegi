Ext.define('Vegi.view.admin.resource.Resource', {
    extend: 'Ext.panel.Panel',
    xtype: 'adminResource',
	
	require:[
		'Vegi.view.admin.resource.ResourceModel',
		'Vegi.view.admin.resource.ResourceController',
		'Vegi.view.admin.resource.Grid',
		'Vegi.view.admin.resource.Search',
		'Vegi.view.admin.resource.Add', 
		'Ext.panel.Panel'
	],

    controller: 'adminResource',

    viewModel: {
        type: 'adminResource'
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
