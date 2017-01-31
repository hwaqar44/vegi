Ext.define('Admin.view.admin.role.RoleModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.adminRole',

    stores: {
        role: {
			autoLoad: true,
            fields:['id','name','text','details'],
            proxy: {
                type: 'ajax',
                url: '../role/load',
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
