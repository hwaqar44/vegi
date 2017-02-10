Ext.define('Vegi.view.production.area.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'productionareamain',
	
	require:[
		'Vegi.view.production.area.MainViewModel',
		'Vegi.view.production.area.MainViewController',
		'Vegi.view.production.area.Search',
		'Vegi.view.production.area.Grid',
		'Vegi.view.production.area.Add',
		'Ext.panel.Panel',
	],

    controller: 'productionareamain',

    viewModel: {
        type: 'productionareamain'
    },

    layout: 'border',
    items: [
		{
			xtype: 'productionareagrid',
			region: 'center'	
		},
		{
			xtype: 'productionareasearch',
			region: 'west'
		}
	]
});
