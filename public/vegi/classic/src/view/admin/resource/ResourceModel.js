Ext.define('Admin.view.admin.resource.ResourceModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.adminResource',

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
