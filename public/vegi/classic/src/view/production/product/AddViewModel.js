Ext.define('Vegi.view.production.product.AddViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productionproductadd',

    stores: {
        record: {
            autoLoad: true,
            fields:['id','text'],
            proxy: {
                type: 'ajax',
                url: '../product/record',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            },
            listeners: {
                load: 'onProductEditLoad'
            }
        }
    }
});