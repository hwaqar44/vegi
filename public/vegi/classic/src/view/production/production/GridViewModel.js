Ext.define('Vegi.view.production.production.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productionproductiongrid',

    stores: {
        production: {
			autoLoad: true,
            fields:['id','name','text','details'],
            proxy: {
                type: 'ajax',
                url: '../production/load',
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
