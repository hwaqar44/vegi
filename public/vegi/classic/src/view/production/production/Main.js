Ext.define('Vegi.view.production.production.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'productionproductionmain',
	
	require:[
		'Vegi.view.production.production.MainViewModel',
		'Vegi.view.production.production.MainViewController',
		'Vegi.view.production.production.Search',
		'Vegi.view.production.production.Grid',
		'Vegi.view.production.production.Add',
		'Ext.panel.Panel',
	],

    controller: 'productionproductionmain',

    viewModel: {
        type: 'productionproductionmain'
    },

    layout: 'border',
    items: [
		{
			xtype: 'productionproductiongrid',
			region: 'center'	
		},
		{
			xtype: 'productionproductionsearch',
			region: 'west'
		}
	]
});
