Ext.define('Vegi.view.admin.resource.ResourceController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.adminResource',

    onMenuClick: function (menu, item) {
        var me = this;
		if (item && item.routeId === 'adminResourceAdd') {
            this.setCurrentView(item.routeId, item.params);
        }
		if (item && item.routeId === 'removeResource') {
            grid = me.getSelectedRecordsString();
			if(!grid.length){
				Ext.Msg.alert('Error', "You need to select 1 record from the list.");
				return false;
			}
			Ext.MessageBox.confirm('Remove Resource(s)?', 'Are you sure you want to remove selected Resources?', function(btn){
				if (btn == 'yes') {
					Ext.Ajax.request({
                        url : '../resource/remove' ,
                        params : {
                            'id[]': grid
                        },
                        method: 'POST',
                        success: function (result, request ) {
							var msg = Ext.decode(result.responseText);
                            Ext.Msg.alert('Success', msg.msg);
                            var store = Ext.ComponentQuery.query('adminResource')[0].getViewModel().getStore('resource');
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
                xtype: 'adminResourceWindow',
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
