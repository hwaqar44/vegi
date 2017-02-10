Ext.define('Admin.view.admin.permission.PermissionModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.adminPermission',

    stores: {
        resource: {
			autoLoad: true,
            fields:['id','name','text','details'],
            proxy: {
                type: 'ajax',
                url: '../resource/load',
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
