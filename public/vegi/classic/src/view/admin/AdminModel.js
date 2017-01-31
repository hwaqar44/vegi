Ext.define('Admin.view.admin.AdminModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.admin',

    stores: {
        inbox: {
            //type: 'inbox'
        },

        friends: {
            //type: 'emailfriends'
        }
    }
});
