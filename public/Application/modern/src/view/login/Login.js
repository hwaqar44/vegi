Ext.define('App.view.login.Login', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.layout.VBox',
		'Ext.field.Checkbox',
        'Ext.field.Password',
        'Ext.field.Text',
        'Ext.layout.HBox',
		'App.view.login.LoginViewController'
    ],
	controller: 'loginlogin',
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
	items:[
		{
			padding: '20 0 0 20',
            html: 'Sign Mobile Account'
		},
		{
            xtype: 'container',
            padding: 20,
            defaults: {
                margin:'0 0 10 0'
            },
            items: [{
                xtype: 'textfield',
                placeHolder: 'Email',
				name: 'username',
                userCls: 'text-border'
            },{
                xtype: 'passwordfield',
                placeHolder: 'Password',
				name: 'password',
                userCls: 'text-border'
            },{
                layout: 'hbox',
                items: [{
                    xtype: 'checkboxfield',
					value: '1',
                    name : 'rememberMe',
                    boxLabel : 'Remember Me',
                },{
                    html: 'Remember Me',
                    style: 'marginTop: 15px;marginRight:20px'
                },{
                    html: '<a href="#passwordreset">Forgot Password</a>',
                    style: 'marginTop: 15px;'
                }]
            },{
                xtype: 'button',
                text: 'Login',
                iconAlign: 'right',
                iconCls: 'x-fa fa-angle-right',
                ui: 'confirm',
				listeners:{
					tap: 'onLoginButtonClick'
				}
            }]
        }
	]
});
