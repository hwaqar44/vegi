Ext.define('Vegi.view.admin.group.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.admingroupgrid',

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
