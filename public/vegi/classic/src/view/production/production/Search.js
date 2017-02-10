Ext.define('Vegi.view.production.production.Search', {
    extend: 'Ext.form.Panel',
    xtype: 'productionproductionsearch',
	
	require:[
		'Vegi.view.production.production.SearchViewModel',
		'Vegi.view.production.production.SearchViewController',
		'Ext.form.ComboBox'
	],

    controller: 'productionproductionsearch',

    viewModel: {
        type: 'productionproductionsearch'
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
			fieldLabel: 'Batch#',
			name: 'batchNo'
		},
		{
			xtype: 'combobox',
			fieldLabel: 'status',
			name: 'statusName',
			emptyText: 'Select status',
			valueField: 'id',
			bind: {
				store: '{status}'
			}
		},
		{
			xtype: 'combobox',
			fieldLabel: 'Area',
			name: 'area',
			emptyText: 'Select Area',
			valueField: 'id',
			bind: {
				store: '{area}'
			}
		},
		{
			xtype: 'combobox',
			fieldLabel: 'Category',
			name: 'category',
			emptyText: 'Select Category',
			valueField: 'id',
			bind: {
				store: '{category}'
			}
		},
		{
			xtype: 'combobox',
			fieldLabel: 'Product',
			name: 'product',
			emptyText: 'Select Product',
			valueField: 'id',
			bind: {
				store: '{product}'
			}
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
