Ext.define('Vegi.view.production.product.Search', {
    extend: 'Ext.form.Panel',
    xtype: 'productionproductsearch',
	
	require:[
		'Vegi.view.production.product.SearchViewModel',
		'Vegi.view.production.product.SearchViewController',
		'Ext.form.ComboBox'
	],

    controller: 'productionproductsearch',

    viewModel: {
        type: 'productionproductsearch'
    },
	
	title: 'Search',
	collapsible: true,
	split: true,
	bodyPadding: 10,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	items: [
		{
			xtype: 'textfield',
			fieldLabel: 'ID',
			name: 'id',
		},
		{
			xtype: 'textfield',
			fieldLabel: 'Name',
			name: 'name'
		},
		{
			xtype: 'textfield',
			fieldLabel: 'detail',
			name: 'Details'
		}
	],
	dockedItems: [
		{
			xtype: 'container',
			dock: 'bottom',
			height: 40,
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			items: [
				
				{
					xtype: 'button',
					margin: 3,
					text: 'Reset Filter',
					iconCls: 'x-fa fa-refresh',
					listeners: {
						click: 'onResetClick'
					}
				},
				{
					xtype: 'tbspacer',
					flex: 1
				},
				{
					xtype: 'button',
					margin: 3,
					text: 'Perform Search',
					iconCls: 'x-fa fa-search',
					listeners: {
						click: 'onPerformSearchClick'
					}
				}
			]
		}
	]
});
