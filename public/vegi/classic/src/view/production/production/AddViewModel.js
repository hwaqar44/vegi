Ext.define('Vegi.view.production.production.AddViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productionproductionadd',

    stores: {
        area: {
            autoLoad: true,
            fields:['id','text'],
            proxy: {
                type: 'ajax',
                url: '../area/area',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        },
        category: {
            autoLoad: true,
            fields:['id','text'],
            proxy: {
                type: 'ajax',
                url: '../category/category',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        },
        product: {
            autoLoad: true,
            fields:['id','text'],
            proxy: {
                type: 'ajax',
                url: '../product/product',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        },
        status: {
            autoLoad: true,
            fields:['id','text'],
             data: [
             	{
		            "id": "active",
		            "text": "Active",
		        }, 
		        {
		            "id": "inactive",
		            "text": "Inactive",
		        }, 
	        	{
		            "id":"pending",
		            "text": "Pending",
		        }
		    ]
        },
        record: {
            autoLoad: true,
            fields:['id','text'],
            proxy: {
                type: 'ajax',
                url: '../production/record',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            },
            listeners: {
                load: 'onProductionEditLoad'
            }
        },
    }
});