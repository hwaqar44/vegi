Ext.define('Vegi.view.admin.AddViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.adminAdd',

    onComposeDiscardClick: function(bt) {
        var win = bt.up('window');
        if (win) {
            win.close();
        }
    }
});
