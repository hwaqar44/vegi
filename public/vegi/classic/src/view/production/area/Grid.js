Ext.define('Vegi.view.production.area.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'productionareagrid',
	
	require:[
		'Vegi.view.production.area.GridViewModel',
		'Vegi.view.production.area.GridViewController',
	],

    controller: 'productionareagrid',

    viewModel: {
        type: 'productionareagrid'
    },
	bind: {
		store: '{area}'
	},
	viewConfig: {
		preserveScrollOnRefresh: true,
		preserveScrollOnReload: true
	},

	scrollable: true,

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
			width: 40
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'name',
			width: 300,
			text: 'Name'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'details',
			flex: 1,
			text: 'Details'
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
				store: '{area}'
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
