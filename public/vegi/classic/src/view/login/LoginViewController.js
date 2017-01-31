
Ext.define('Vegi.view.login.LoginViewController', {
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
		win = this.getView();
		Ext.Ajax.request({
			url : '../login' ,
			params : {
				username: username,
				password: password,
			},
			method: 'POST',
			success: function (result, request ) {
				var response = Ext.decode(result.responseText);
				if(response.success){
					win.close();
					var panel = Ext.create('Vegi.view.main.Main');
				} else{
					console.log(response.msg);
					 Ext.Msg.alert('Error', response.msg);
				}
			}
		});
	},
	
	onForgetPasswordClick: function(button){
		this.getView().close();
		Ext.create('Vegi.view.login.Forgot',{}).show();
	},
	
	onSendEmailClick: function(button){
		this.getView().close();
		Ext.create('Vegi.view.login.Forgot',{}).show();
	}

});