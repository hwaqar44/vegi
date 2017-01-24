/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('App.Application', {
    extend: 'Ext.app.Application',
    
    name: 'App',
	//plugins: 'viewport',
    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
		if(!Ext.is.Phone){
			Ext.create('App.view.login.Login', {}).show();
		} else{
			var panel = Ext.create('App.view.login.Login', {
					centered : true,
				});

			Ext.Viewport.add(panel);

			panel.show();
		}
			
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
