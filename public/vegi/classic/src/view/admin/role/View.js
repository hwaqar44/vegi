Ext.define('Vegi.view.admin.role.View', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.adminroleview',
	
	require:[
		'Vegi.view.admin.role.ViewViewModel',
		'Vegi.view.admin.role.ViewViewController',
		'Vegi.view.main.MainToolbar',
		'Ext.panel.Panel',
        'Ext.button.Button',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Paging',
        'Ext.selection.CheckboxModel',
	],

    controller: 'adminroleview',

    viewModel: {
        type: 'adminroleview'
    },
	
	
    showAnimation: 'slideIn',
	layout: 'fit',
    items: [
		
		{
			xtype: 'form',
			bodyPadding: 10,
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			items: [
				{
					xtype: 'textfield',
					width: 300
				}
			]
		}
	],
	dockedItems: [
		{
			xtype: 'mainmaintoolbar',
			title: 'Roles:::::::'
		}
	]
});
