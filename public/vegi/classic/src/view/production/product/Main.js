Ext.define('Vegi.view.production.product.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'productionproductmain',
	
	require:[
		'Vegi.view.production.product.MainViewModel',
		'Vegi.view.production.product.MainViewController',
		'Vegi.view.production.product.Search',
		'Vegi.view.production.product.Grid',
		'Vegi.view.production.product.Add',
		'Ext.panel.Panel',
	],

    controller: 'productionproductmain',

    viewModel: {
        type: 'productionproductmain'
    },

    layout: 'border',
    items: [
		{
			xtype: 'productionproductgrid',
			region: 'center'	
		},
		{
			xtype: 'productionproductsearch',
			region: 'west'
		}
	]
});
