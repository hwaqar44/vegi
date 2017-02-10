/**
 * This view is an example list of people.
 */
Ext.define('Vegi.view.main.MainTab', {
	extend: 'Ext.tab.Panel',
    alias: 'widget.maintab',

    requires: [
        'Vegi.store.Personnel',
        'Ext.tab.Panel',
        'Ext.grid.Panel',
        'Ext.tab.Tab'
    ],
});
