Ext.define('Vegi.view.admin.role.Search', {
    extend: 'Ext.form.Panel',
    xtype: 'adminrolesearch',
	
	require:[
		'Vegi.view.admin.role.SearchViewModel',
		'Vegi.view.admin.role.SearchViewController',
	],

    controller: 'adminrolesearch',

    viewModel: {
        type: 'adminrolesearch'
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
