Ext.define('Vegi.view.production.production.SearchViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productionproductionsearch',

    onMenuClick: function (menu, item) {
        var me = this;
		if (item && item.routeId === 'adminGroupAdd') {
            this.setCurrentView(item.routeId, item.params);
        }
		if (item && item.routeId === 'removeGroup') {
            grid = me.getSelectedRecordsString();
			if(!grid.length){
				Ext.Msg.alert('Error', "You need to select 1 record from the list.");
				return false;
			}
			Ext.MessageBox.confirm('Remove Group(s)?', 'Are you sure you want to remove selected Groups?', function(btn){
				if (btn == 'yes') {
					Ext.Ajax.request({
                        url : '../group/remove' ,
                        params : {
                            'id[]': grid
                        },
                        method: 'POST',
                        success: function (result, request ) {
							var msg = Ext.decode(result.responseText);
                            Ext.Msg.alert('Success', msg.msg);
                            var store = Ext.ComponentQuery.query('adminGroup')[0].getViewModel().getStore('group');
                            store.load();
                        }
                    });
				}
			})
        }
    },

    setCurrentView: function(view, params) {
		var me = this;
		var grid, record;
		if(params.edit){		
			grid = me.getView().down('grid').getSelectionModel().getSelected();
			if(!grid.length){
				Ext.Msg.alert('Error', "You need to select 1 record from the list.");
				return false;
			} else if(grid.length > 1){
				Ext.Msg.alert('Error', "You need to select only 1 record from the list.");
				return false;
			}
		}
        if (params && params.openWindow) {
            var cfg = Ext.apply({
                xtype: 'adminAddWindow',
                items: [
                    Ext.apply({
                        xtype: view
                    }, params.targetCfg)
                ]
            }, params.windowCfg);
            var form = Ext.create(cfg);
			if(params.edit){
				form.down('form').getForm().loadRecord(grid.items[0]);
			}
        }
    },

    onGridCellItemClick: function(view, td, cellIndex, record){
       
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
    },
});
