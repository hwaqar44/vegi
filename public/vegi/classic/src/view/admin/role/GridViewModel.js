Ext.define('Vegi.view.admin.role.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.adminrolegrid',

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
