Ext.define('Vegi.view.production.production.GridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productionproductiongrid',

   control: {
        "gridpanel actioncolumn[reference=editcolumn]": {
            click: 'onEditGridClick'
        },
        "gridpanel actioncolumn[reference=viewaction]": {
            click: 'onViewGridClick'
        }
    },

    onAddButtonClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var store = this.getViewModel().getStore('production');
        var window = Ext.create('Vegi.view.production.production.Add',{
            viewModel: {
                data: {
                    store: store
                }
            }

        }).show();
    },

    onEditGridClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var store = this.getViewModel().getStore('production');
        var window = Ext.create('Vegi.view.production.production.Add',{
            title: 'Edit Production: ' +rowIndex.data.name,
            viewModel: {
                data: {
                    id: rowIndex.data.id,
                    store: store
                }
            }
        }).show();
    },

    onViewGridClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var store = this.getViewModel().getStore('production');
       // this.getView().//removeAll();
        //console.log(this.getView().up('adminrole'));
        var panel = Ext.create('Vegi.view.production.production.Add',{
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
