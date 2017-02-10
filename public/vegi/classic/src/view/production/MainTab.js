Ext.define('Vegi.view.production.MainTab', {
     extend: 'Ext.tab.Panel',
    alias: 'widget.productionmaintab',

    requires: [
        'Ext.tab.Panel',
		'Ext.panel.Panel',
        'Ext.grid.Panel',
        'Ext.tab.Tab'
    ],
	//controller: 'adminadmintab',
   /* viewModel: {
        type: 'adminadmintab'
    },*/
	border: false,
    items: 
	[
		{
			xtype: 'productionproductionmain',
			title: 'Productions'
		},
		{
			xtype: 'productionproductmain',
			title: 'Product'
		},
		{
			xtype: 'productioncategorymain',
			title: 'Category'
		},
		{
			xtype: 'productionareamain',
			title: 'Area'
		}
    ]

});