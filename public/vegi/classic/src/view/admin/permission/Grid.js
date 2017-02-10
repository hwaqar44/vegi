Ext.define('Vegi.view.admin.permission.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'adminpermissiongrid',
	
	require:[
		'Vegi.view.admin.permission.GridViewModel',
		'Vegi.view.admin.permission.GridViewController',
		'Vegi.view.admin.permission.Add',
	],

    controller: 'adminpermissiongrid',

    viewModel: {
        type: 'adminpermissiongrid'
    },
	bind: {
		store: '{permission}'
	},
	viewConfig: {
		preserveScrollOnRefresh: true,
		preserveScrollOnReload: true
	},

	selModel: {
		selType: 'checkboxmodel',
		checkOnly: true,
		showHeaderCheckbox: true
	},
	
	headerBorders: false,
	rowLines: false,
	columns: [
		{
			xtype: 'gridcolumn',
			dataIndex: 'id',
			menuDisabled: true,
			text: 'ID',
			width: 40,
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'name',
			text: 'Name',
			width: 140
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'code',
			text: 'code',
			width: 140
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'details',
			text: 'Description',
			flex: 1
		},
		{
			xtype: 'actioncolumn',
			width: 60,
			reference: 'viewaction',
			text: 'View',
			items: [
				{
					iconCls: 'x-fa fa-eye'
				}
			]
		},
		{
			xtype: 'actioncolumn',
			width: 70, 
			text: 'Edit',
			reference: 'editcolumn',
			items: [
				{
					iconCls: 'x-fa fa-pencil-square-o'
				}
			]
		}
	],
	dockedItems: [		
		{
			xtype: 'pagingtoolbar',
			cls: 'grid-toolbar',
			dock: 'bottom',
			displayInfo: true,
			bind: {
				store: '{role}'
			}
		},
		{
			xtype: 'toolbar',
			cls: 'grid-toolbar',
			dock: 'top',
			items: [
				{
					xtype: 'button',
					routeId: 'adminRoleAdd',
					iconCls: 'x-fa fa-plus',
					text: 'Add',
					listeners: {
						click: 'onAddButtonClick'
					}
				},
				{
					xtype: 'tbfill',
					flex: 1
				},
				{
					xtype: 'button',
					routeId: 'removeRole',
					iconCls: 'x-fa fa-trash-o',
					text: 'Batch Delete'
				}
			]
		}
	]	
});
