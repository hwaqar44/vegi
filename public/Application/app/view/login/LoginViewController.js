
Ext.define('App.view.login.LoginViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginlogin',
	
	config:{
		refs:{
			
		},
		control:{
		}
	},
	onLoginButtonClick: function(){
		var username = this.getView().down('textfield[name=username]').getValue();
		var password = this.getView().down('[name=password]').getValue();
		Ext.Ajax.request({
			url : '../login' ,
			params : {
				username: username,
				password: password,
			},
			method: 'POST',
			success: function (result, request ) {
				Ext.Msg.alert('Success', 'Operation has been completed successfully.');
			}
		});
	},
	
	onForgetPasswordClick: function(button){
		this.getView().close();
		Ext.create('App.view.login.Forgot',{}).show();
	},
	
	onSendEmailClick: function(button){
		this.getView().close();
		Ext.create('App.view.login.Forgot',{}).show();
	}

});