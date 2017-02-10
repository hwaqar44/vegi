Ext.define('Vegi.view.production.area.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.productionareaadd',
    requires: [
        'Ext.button.Button',
		'Vegi.view.production.area.AddViewController',
		'Vegi.view.production.area.AddViewModel',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text',
        'Ext.toolbar.Spacer',
        'Ext.form.ComboBox',
        'Ext.form.field.HtmlEditor'
    ],

    viewModel: {
        type: 'productionareaadd'
    },

    controller: 'productionareaadd',
    width: 500,
    height: 250,
    modal: true,

    //cls: 'email-compose',
    layout: 'fit',
    title: 'Add Area',

    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            layout: {
                type:'vbox',
                align:'stretch'
            },
            items: [
                {
                    xtype: 'hidden',
                    name: 'id'
                },
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Name',
                    allowBlank: false
                },
                {
                    xtype: 'textareafield',
                    name: 'detail',
                    fieldLabel: 'Details'
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'container',
            dock: 'bottom',
            layout: {
                type: 'hbox',
                align: 'stretch',
                padding: 10
            },
            items: [
                {
                    xtype: 'tbspacer',
                    flex: 1
                },
                {
                    xtype: 'button',
                    ui: 'soft-red',
                    text: 'Discard',
                    handler: 'onComposeDiscardClick'
                },
                {
                    xtype: 'tbspacer',
                    width: 5,
                },
                {
                    xtype: 'button',
                    ui: 'gray',
                    text: 'Save',
                    handler: 'onSaveButtonClick'
                }
            ]
        }
    ],
    listeners: {
        show: 'onAreaEditShow'
    }
});
