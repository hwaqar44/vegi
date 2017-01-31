Ext.define('Vegi.view.admin.List', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.adminList',

    viewModel: {
        type: 'adminList'
    },

    controller: 'adminList',

    title: 'Friends',

    cls: 'navigation-email',

    iconCls: 'x-fa fa-group',

    floating: false
});
