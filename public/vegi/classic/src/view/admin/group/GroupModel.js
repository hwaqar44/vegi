Ext.define('Admin.view.admin.group.GroupModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.adminGroup',

    stores: {
        group: {
			autoLoad: true,
            fields:['id','name','text','details'],
            proxy: {
                type: 'ajax',
                url: '../group/load',
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
