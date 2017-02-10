Ext.define('Vegi.view.admin.group.GridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admingroupgrid',

     control: {
        "gridpanel actioncolumn[reference=editcolumn]": {
            click: 'onEditGridClick'
        },
        "gridpanel actioncolumn[reference=viewaction]": {
            click: 'onViewGridClick'
        }
    },

    onAddButtonClick: function(button, e ,v) {
        console.log(button);
        console.log(e);
        console.log(v);
        var store = this.getViewModel().getStore('group');
        var window = Ext.create('Vegi.view.admin.group.Add',{  
            viewModel: {
                data: {
                    store: store
                }
            }

        }).show();
    },

    onEditGridClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        console.log(rowIndex);   
        var store = this.getViewModel().getStore('group');
        var window = Ext.create('Vegi.view.admin.group.Add',{
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
        var store = this.getViewModel().getStore('group');
       // this.getView().//removeAll();
       // console.log(this.getView().up('adminrole'));
        var panel = Ext.create('Vegi.view.admin.group.Add',{
            viewModel: {
                data: {
                    id: rowIndex.data.id,
                    store: store
                }
            }
        }).show();
    },

    
    
 	getSelectedRecordsString: function() {
        
        var grid = this.getView().down('grid').getSelectionModel().getSelection();
        var items = new Array();
        if (grid.length) {
            for(var i=0; i<grid.length;i++) {
                items[i] = grid[i].get('id');
            }
        }
        return items;
    }

});
