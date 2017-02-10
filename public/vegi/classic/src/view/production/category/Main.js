Ext.define('Vegi.view.production.category.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'productioncategorymain',
	
	require:[
		'Vegi.view.production.category.MainViewModel',
		'Vegi.view.production.category.MainViewController',
		'Vegi.view.production.category.Search',
		'Vegi.view.production.category.Grid',
		'Vegi.view.production.category.Add',
		'Ext.panel.Panel',
	],

    controller: 'productioncategorymain',

    viewModel: {
        type: 'productioncategorymain'
    },

    layout: 'border',
    items: [
		{
			xtype: 'productioncategorygrid',
			region: 'center'	
		},
		{
			xtype: 'productioncategorysearch',
			region: 'west'
		}
	]
});
