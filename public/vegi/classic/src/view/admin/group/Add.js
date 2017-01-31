Ext.define('Vegi.view.admin.group.Add', {
    extend: 'Ext.form.Panel',
    alias: 'widget.adminGroupAdd',
    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.form.field.HtmlEditor'
    ],

    viewModel: {
        type: 'adminGroupAdd'
    },

    controller: 'adminGroupAdd',

    cls: 'email-compose',

    layout: {
        type:'vbox',
        align:'stretch'
    },

    bodyPadding: 10,
    scrollable: true,

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
    ],

    bbar: {
        overflowHandler: 'menu',
        items: [
            '->',
            {
                xtype: 'button',
                ui: 'soft-red',
                text: 'Discard',
                handler: 'onComposeDiscardClick'
            },
            {
                xtype: 'button',
                ui: 'gray',
                text: 'Save',
				handler: 'onSaveButtonClick'
            }
        ]
    }
});
