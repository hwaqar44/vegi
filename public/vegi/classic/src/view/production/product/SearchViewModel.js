Ext.define('Vegi.view.production.product.SearchViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productionproductsearch',

    stores: {
        area: {
            fields:['id','text'],
            proxy: {
                type: 'ajax',
                url: '../product/area',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        },
        category: {
            fields:['id','text'],
            proxy: {
                type: 'ajax',
                url: '../product/category',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        },
        product: {
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
            fields:['id','text'],
             data: [
             	{
		            "id": "active",
		            "text": "Active",
		        }, 
		        {
		            "id": "Inactive",
		            "text": "Inactive",
		        }, 
	        	{
		            "id":"pending",
		            "text": "Pending",
		        }
		    ]
        }
    }
});
