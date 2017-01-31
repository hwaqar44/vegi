Ext.define('Vegi.view.admin.ListViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.adminList',

    stores: {
        friends: {
            //Store reference
            //type: 'emailfriends',

            //Auto load
            //autoLoad: true
        }
    }
});
