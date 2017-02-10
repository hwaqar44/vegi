Ext.define('Vegi.view.production.category.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.productioncategoryadd',
    requires: [
        'Ext.button.Button',
		'Vegi.view.production.category.AddViewController',
		'Vegi.view.production.category.AddViewModel',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text',
        'Ext.toolbar.Spacer',
        'Ext.form.ComboBox',
        'Ext.form.field.HtmlEditor'
    ],

    viewModel: {
        type: 'productioncategoryadd'
    },

    controller: 'productioncategoryadd',
    width: 500,
    height: 250,
    modal: true,

    //cls: 'email-compose',
    layout: 'fit',
    title: 'Add Category',

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
        show: 'onCategoryEditShow'
    }
});
