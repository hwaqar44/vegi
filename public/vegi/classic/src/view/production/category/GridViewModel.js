Ext.define('Vegi.view.production.category.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productioncategorygrid',

    stores: {
        category: {
			autoLoad: true,
            fields:['id','name','text','details'],
            proxy: {
                type: 'ajax',
                url: '../category/load',
                reader: {
                    type: 'json',
                    rootProperty: 'item'
                }
            }
        }
    }
});
