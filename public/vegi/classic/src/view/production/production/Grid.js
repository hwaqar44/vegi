Ext.define('Vegi.view.production.production.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'productionproductiongrid',
	
	require:[
		'Vegi.view.production.production.GridViewModel',
		'Vegi.view.production.production.GridViewController',
	],

    controller: 'productionproductiongrid',

    viewModel: {
        type: 'productionproductiongrid'
    },
	bind: {
		store: '{production}'
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
			width: 40,
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'batchNo',
			width: 70,
			text: 'Batch#',
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'categoryName',
			text: 'Category',
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'productName',
			text: 'Product',
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'noOfPlants',
			text: 'No of Plants',
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'sowingDate',
			text: 'Sowing Date'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'areaName',
			text: 'Area',
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'harvestingStart',
			width: 150,
			text: 'Harvesting Start',
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'estimatedYield',
			width: 150,
			text: 'Estimated Yield',
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'harvestingStartDate',
			width: 150,
			text: 'Harvesting Start Date',
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'harvestingEndDate',
			width: 150,
			text: 'Harvesting End Date',
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'statusName',
			text: 'status',
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
				store: '{production}'
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
