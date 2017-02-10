Ext.define('Vegi.view.admin.resource.GridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.adminresourcegrid',
	
	
    control: {
        "gridpanel actioncolumn[reference=editcolumn]": {
            click: 'onEditGridClick'
        },
        "gridpanel actioncolumn[reference=viewaction]": {
            click: 'onViewGridClick'
        }
    },

    onAddButtonClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var store = this.getViewModel().getStore('resource');
        var window = Ext.create('Vegi.view.admin.resource.Add',{
            viewModel: {
                data: {
                    store: store
                }
            }

        }).show();
    },

    onEditGridClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var store = this.getViewModel().getStore('resource');
        var window = Ext.create('Vegi.view.admin.resource.Add',{
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
        var store = this.getViewModel().getStore('resource');
       // this.getView().//removeAll();
        console.log(this.getView().up('adminrole'));
        var panel = Ext.create('Vegi.view.admin.resource.View',{
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
