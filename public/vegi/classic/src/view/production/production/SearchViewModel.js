Ext.define('Vegi.view.production.production.SearchViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productionproductionsearch',

    stores: {
        area: {
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
