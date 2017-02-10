Ext.define('Vegi.view.production.product.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.productionproductadd',
    requires: [
        'Ext.button.Button',
		'Vegi.view.production.product.AddViewController',
		'Vegi.view.production.product.AddViewModel',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text',
        'Ext.toolbar.Spacer',
        'Ext.form.ComboBox',
        'Ext.form.field.HtmlEditor'
    ],

    viewModel: {
        type: 'productionproductadd'
    },

    controller: 'productionproductadd',
    width: 500,
    height: 250,
    modal: true,

    //cls: 'email-compose',
    layout: 'fit',
    title: 'Add Product',

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
                    fieldLabel: 'Name',
                    name: 'name',
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
        show: 'onProductEditShow'
    }
});
