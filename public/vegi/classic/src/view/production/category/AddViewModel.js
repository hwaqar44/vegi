Ext.define('Vegi.view.production.category.AddViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productioncategoryadd',

    stores: {
        record: {
            autoLoad: true,
            fields:['id','text'],
            proxy: {
                type: 'ajax',
                url: '../category/record',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            },
            listeners: {
                load: 'onCategoryEditLoad'
            }
        }
    }
});