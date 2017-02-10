Ext.define('Vegi.view.admin.role.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.adminRoleAdd',
    requires: [
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text',
        'Ext.toolbar.Spacer',
        'Ext.form.field.HtmlEditor'
    ],

    viewModel: {
        type: 'adminRoleAdd'
    },

    controller: 'adminRoleAdd',
    width: 500,
    height: 300,

    //cls: 'email-compose',
    layout: 'fit',
    title: 'Add Role',

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
                    fieldLabel: 'Title',
                    name: 'name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Code',
                    name: 'code'
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Descriptions',
                    name: 'details',
                    
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
    ]
});
