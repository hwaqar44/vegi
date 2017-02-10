Ext.define('Vegi.view.admin.permission.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.adminpermissiongrid',

    stores: {
        permission: {
			autoLoad: true,
            fields:['id','name','text','details'],
            proxy: {
                type: 'ajax',
                url: '../permission/load',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        },

        friends: {
            //type: 'emailfriends'
        }
    }
});
