Ext.define('Vegi.view.admin.permission.Add', {
    extend: 'Ext.form.Panel',
    alias: 'widget.adminpermissionAdd',
    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.form.field.HtmlEditor'
    ],

    viewModel: {
        type: 'adminpermissionAdd'
    },

    controller: 'adminpermissionAdd',
    width: 500,
    height: 300,

    //cls: 'email-compose',
    layout: 'fit',
    title: 'Add Permission',

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
                    iconCls: 'x-fa fa-ban',
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
                    iconCls: 'x-fa fa-floppy-o',
                    ui: 'gray',
                    text: 'Save',
                    handler: 'onSaveButtonClick'
                }
            ]
        }
    ]
});
