Ext.define('Vegi.view.admin.group.Search', {
    extend: 'Ext.panel.Panel',
    xtype: 'admingroupsearch',
	
	require:[
		'Vegi.view.admin.group.SearchViewModel',
		'Vegi.view.admin.group.SearchViewController',
	],

    controller: 'admingroupsearch',

    viewModel: {
        type: 'admingroupsearch'
    },
	width: 250,
	collapsible: true,
	title: 'Search',
	split: true,
	layout: 'fit',
	
	items: [
		{
			xtype: 'form',
			border: false,
			bodyPadding: 10,
			layout: {
				type: 'vbox',
				align: 'stretch'
			},	
			items: [
				{
                    xtype: 'textfield',
                    fieldLabel: 'Title',
                    name: 'name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Code',
                    name: 'code'
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Descriptions',
                    name: 'details'
                }
			]		
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
