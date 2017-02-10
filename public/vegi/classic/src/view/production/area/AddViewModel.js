Ext.define('Vegi.view.production.area.AddViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productionareaadd',

    stores: {
        record: {
            autoLoad: true,
            fields:['id','text'],
            proxy: {
                type: 'ajax',
                url: '../area/record',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            },
            listeners: {
                load: 'onAreaEditLoad'
            }
        }
    }
});