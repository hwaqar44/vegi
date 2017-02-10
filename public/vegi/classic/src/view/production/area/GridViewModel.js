Ext.define('Vegi.view.production.area.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productionareagrid',

    stores: {
        area: {
			autoLoad: true,
            fields:['id','name','text','details'],
            proxy: {
                type: 'ajax',
                url: '../area/load',
                reader: {
                    type: 'json',
                    rootProperty: 'item'
                }
            }
        },

        friends: {
            //type: 'emailfriends'
        }
    }
});
