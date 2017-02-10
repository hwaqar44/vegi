Ext.define('Vegi.view.admin.permission.AddViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.adminpermissionAdd',

    onComposeDiscardClick: function(bt) {
        var win = bt.up('window');
        if (win) {
            win.close();
        }
    },

    onSaveButtonClick: function(bt) {
        var form = this.getView().down('form');
		var store = Ext.ComponentQuery.query('adminResource')[0].getViewModel().getStore('resource');
		var me = this;
        form.getForm().submit({
            waitMsg: 'Saving ...',
            clientValidation: true,
            url: '../permission/save',
            success: function(form, action) {
				Ext.Msg.alert('Success', action.result.msg);
				me.getView().up('window').close();
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
    }
});
