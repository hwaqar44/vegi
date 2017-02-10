Ext.define('Vegi.view.production.product.GridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productionproductgrid',

   control: {
        "gridpanel actioncolumn[reference=editcolumn]": {
            click: 'onEditGridClick'
        },
        "gridpanel actioncolumn[reference=viewaction]": {
            click: 'onViewGridClick'
        }
    },

    onAddButtonClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var store = this.getViewModel().getStore('product');
        var window = Ext.create('Vegi.view.production.product.Add',{
            viewModel: {
                data: {
                    store: store
                }
            }

        }).show();
    },

    onEditGridClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var store = this.getViewModel().getStore('product');
        var window = Ext.create('Vegi.view.production.product.Add',{
            title: 'Edit Product: ' +rowIndex.data.name,
            viewModel: {
                data: {
                    id: rowIndex.data.id,
                    store: store
                }
            }
        }).show();
    },

    onViewGridClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var store = this.getViewModel().getStore('product');
       // this.getView().//removeAll();
        //console.log(this.getView().up('adminrole'));
        var panel = Ext.create('Vegi.view.production.product.Add',{
            viewModel: {
                data: {
                    id: rowIndex.data.id,
                    store: store
                }
            }
        });

        Ext.ComponentQuery.query('#mainpanel')[0].add(
        panel
        ).show();
    }
   
});
