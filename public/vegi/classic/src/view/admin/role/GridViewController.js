Ext.define('Vegi.view.admin.role.GridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.adminrolegrid',

   control: {
        "gridpanel actioncolumn[reference=editcolumn]": {
            click: 'onEditGridClick'
        },
        "gridpanel actioncolumn[reference=viewaction]": {
            click: 'onViewGridClick'
        }
    },

    onAddButtonClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var store = this.getViewModel().getStore('role');
        var window = Ext.create('Vegi.view.admin.role.Add',{
            viewModel: {
                data: {
                    store: store
                }
            }

        }).show();
    },

    onEditGridClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var store = this.getViewModel().getStore('role');
        var window = Ext.create('Vegi.view.admin.role.Add',{
            title: 'Edit Role: ' +rowIndex.data.name,
            viewModel: {
                data: {
                    id: rowIndex.data.id,
                    store: store
                }
            }
        }).show();
    },

    onViewGridClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var store = this.getViewModel().getStore('role');
       // this.getView().//removeAll();
        console.log(this.getView().up('adminrole'));
        var panel = Ext.create('Vegi.view.admin.role.View',{
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
