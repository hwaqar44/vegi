Ext.define('Vegi.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    control: {
        "splitbutton": {
            mouseover: 'onMouseOverButtonClick',
            //mouseout: 'onButtonMouseOUt'
        },
        "menu": {
           //mouseover: 'onMenuMouseOver',
            mouseleave: 'onMenuMouseOUt'
        }
    },
 
    onMouseOverButtonClick: function(button, e ,v) {
        button.showMenu();
    },


     onMenuMouseOUt: function(button, e ,v) {
        var menu = button.up('splitbutton').hideMenu();
    },

    listen : {
        controller : {
            '#' : {
                unmatchedroute : 'onRouteChange'
            }
        }
    },

    routes: {
        ':node': 'onRouteChange'
    },

    lastView: null,

    onRoleButtonClick: function(button, e, eOpts) {
        this.getView().down('panel[name=mainpanel]').removeAll();
        var panel = Ext.create('Vegi.view.admin.AdminTab',{
        });

        Ext.ComponentQuery.query('#mainpanel')[0].add(
        panel
        ).show();
    },

    onProductionButtonClick: function(button, e, eOpts) {
        this.getView().down('panel[name=mainpanel]').removeAll();
        var panel = Ext.create('Vegi.view.production.MainTab',{
        });

        Ext.ComponentQuery.query('#mainpanel')[0].add(
        panel
        ).show();
    },

    onMainViewRender:function() {
        //if (!window.location.hash) {
           // this.redirectTo("role");
       // }
    },

    onRouteChange:function(id){
        //this.setCurrentView(id);
    },

    onSearchRouteChange: function () {
        //this.setCurrentView('searchresults');
    },

    onSwitchToModern: function () {
        Ext.Msg.confirm('Switch to Modern', 'Are you sure you want to switch toolkits?',
                        this.onSwitchToModernConfirmed, this);
    },

    onSwitchToModernConfirmed: function (choice) {
        if (choice === 'yes') {
            var s = location.search;

            // Strip "?classic" or "&classic" with optionally more "&foo" tokens
            // following and ensure we don't start with "?".
            s = s.replace(/(^\?|&)classic($|&)/, '').replace(/^\?/, '');

            // Add "?modern&" before the remaining tokens and strip & if there are
            // none.
            location.search = ('?modern&' + s).replace(/&$/, '');
        }
    },

    onEmailRouteChange: function () {
        this.setCurrentView('email');
    }
});
