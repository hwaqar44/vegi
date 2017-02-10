Ext.define('Vegi.view.admin.AdminTab', {
     extend: 'Ext.tab.Panel',
    alias: 'widget.adminadmintab',

    requires: [
        'Ext.tab.Panel',
		'Ext.panel.Panel',
		'Vegi.view.admin.role.Role',
		'Vegi.view.admin.group.Group',
		'Vegi.view.admin.resource.Resource',
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
			xtype: 'adminRole',
			title: 'Roles'
		},
		{
			xtype: 'adminGroup',
			title: 'Groups'
		},
		{
			xtype: 'adminResource',
			title: 'Resources'
		},
		{
			xtype: 'adminPermission',
			title: 'Permissions'
		}
    ]

});