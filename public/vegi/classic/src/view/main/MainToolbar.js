/**
 * This view is an example list of people.
 */
Ext.define('Vegi.view.main.MainToolbar', {
    extend: 'Ext.tab.Panel',
	alias: 'widget.mainmaintoolbar',
	
    requires: [
		'Vegi.view.main.MainToolbarViewModel',
		'Vegi.view.main.MainToolbarViewController',
        'Ext.tab.Panel',
        'Ext.grid.Panel',
        'Ext.tab.Tab',
        'Ext.toolbar.Fill',
		'Ext.toolbar.Toolbar',
        'Ext.toolbar.Paging',
    ],
	
	controller: 'mainmaintoolbar',
	viewModel: {
        type: 'mainmaintoolbar'
    },
	dock: 'top',
	height: 60,
	cls: 'main-toolbar-category',
	items: [
		{
			xtype: 'label',
			cls: 'biggertext'
		},
		{
			xtype: 'tbfill',
			flex: 1
		},
		{
			xtype: 'textfield',
			name: 'searchbox',
			hidden: true,
			emptyText: 'Search.....',
			cls: 'search-textfield-main-toolbar',
			width: 230
		},
		{
			iconCls:'x-fa fa-search',
			ui: 'header',
			tooltip: 'Search',
			listeners: {
				mouseover: 'onSearchButtonMouseover'
				//mouseout: 'onSearchButtonMouseout'
			}
		}
	],
	listeners: {
		beforerender: 'onMainToolbarShow'
	}	
	
});
