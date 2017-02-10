Ext.define('Vegi.view.production.product.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productionproductgrid',

    stores: {
        product: {
			autoLoad: true,
            fields:['id','name','text','detail'],
            proxy: {
                type: 'ajax',
                url: '../product/load',
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
