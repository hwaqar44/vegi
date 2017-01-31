/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Vegi.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Vegi',

   stores: [
        'NavigationTree'
    ],
	 defaultToken : 'dashboard',

    // The name of the initial view to create. This class will gain a "viewport" plugin
    // if it does not extend Ext.Viewport.
    //
    mainView: 'Vegi.view.main.Main',
	launch: function(){
		console.log("Launching ...");
		/*if(!Ext.is.Phone){
			Ext.create('Vegi.view.login.Login', {}).show();
		} else{
			var panel = Ext.create('Vegi.view.login.Login', {
					centered : true,
				});

			Ext.Viewport.add(panel);

			panel.show();
		}*/
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
