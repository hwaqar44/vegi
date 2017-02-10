Ext.define('Vegi.view.production.area.AddViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productionareaadd',

    onComposeDiscardClick: function(bt) {
        var win = bt.up('window');
        if (win) {
            win.close();
        }
    },

    onSaveButtonClick: function(button, e, eOpts) {
        var form = this.getView().down('form');
        var store = this.getViewModel().get('store');
        form.getForm().submit({
            waitMsg: 'Saving ...',
            clientValidation: true,
            url: '../area/save',
            success: function(form, action) {
				Ext.Msg.alert('Success', action.result.msg);
				button.up('window').close();
				if (store) {
					store.load();
				}
				
            },
            failure: function(form, action) {
                switch (action.failureType) {
                    case Ext.form.Action.CLIENT_INVALID:
                    Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                    break;
                    case Ext.form.Action.CONNECT_FAILURE:
                    Ext.Msg.alert('Failure', 'Ajax communication failed');
                    break;
                    case Ext.form.Action.SERVER_INVALID:
                    Ext.Msg.alert('Failure', action.result.msg);
                }
            }
        });
    },
    
    onAreaEditShow: function(){
        var id = this.getViewModel().get('id');
        var store = this.getViewModel().getStore('record');
        store.getProxy().setExtraParam('id',id);
        store.load();
    },
    
    onAreaEditLoad: function(store, records, successful, operation, eOpts){
        var form = this.getView().down('form');
        if (records.length && records){
            form.loadRecord(records[0]);
        }
    }
});
