Ext.define('Vegi.view.admin.resource.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.adminresourcegrid',

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
