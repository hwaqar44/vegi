Ext.define('Vegi.view.main.MainToolbarViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainmaintoolbar',

	onSearchButtonMouseover: function( button , e , eOpts) {
        var textfield = this.getView().down('textfield[name=searchbox]');
        textfield.el.on('mouseout', function(){
            textfield.hide();
        });
        textfield.show();
        console.log(textfield.el)
    },
	
	onMainToolbarShow: function(button , e , eOpts) {
		var label = this.getView().down('label');
		label.setText(button.title);
		console.log(label);
		label.updateLayout();
	}
    
});
