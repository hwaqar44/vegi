Ext.define('Vegi.view.production.production.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.productionproductionadd',
    requires: [
        'Ext.button.Button',
		'Vegi.view.production.production.AddViewController',
		'Vegi.view.production.production.AddViewModel',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text',
        'Ext.toolbar.Spacer',
        'Ext.form.ComboBox',
        'Ext.form.field.HtmlEditor'
    ],

    viewModel: {
        type: 'productionproductionadd'
    },

    controller: 'productionproductionadd',
    width: 700,
    height: 600,
    modal: true,

    //cls: 'email-compose',
    layout: 'fit',
    title: 'Add Production',

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
                    labelWidth: 160,
                    fieldLabel: 'Batch#',
                    name: 'batchNo',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    labelWidth: 160,
                    fieldLabel: 'No of Plants',
                    name: 'noOfPlants'
                },
                {
                    xtype: 'datefield',
                    name: 'sowingDate',
                    labelWidth: 160,
                    fieldLabel: 'Sowing Date',
                    
                },
                {
                    xtype: 'datefield',
                    labelWidth: 160,
                    fieldLabel: 'Harvesting Start',
                    name: 'harvestingStart',
                    
                },
                {
                    xtype: 'textfield',
                    name: 'estimatedYield',
                    labelWidth: 160,
                    fieldLabel: 'Estimated Yield'
                },
                {
                    xtype: 'datefield',
                    name: 'harvestingStartDate',
                    labelWidth: 160,
                    fieldLabel: 'Harvesting Start Date'
                },
                {
                    xtype: 'datefield',
                    name: 'harvestingEndDate',
                    labelWidth: 160,
                    fieldLabel: 'Harvesting End Date',
                    
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Status',
                    name: 'statusName',
                    labelWidth: 160,
                    emptyText: 'Select status',
                    valueField: 'id',
                    allowBlank: false,
                    bind: {
                        store: '{status}'
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Area',
                    labelWidth: 160,
                    name: 'area',
                    emptyText: 'Select Area',
                    valueField: 'id',
                    allowBlank: false,
                    bind: {
                        store: '{area}'
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Category',
                    labelWidth: 160,
                    name: 'category',
                    emptyText: 'Select Category',
                    valueField: 'id',
                    allowBlank: false,
                    bind: {
                        store: '{category}'
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Product',
                    labelWidth: 160,
                    name: 'product',
                    emptyText: 'Select Product',
                    valueField: 'id',
                    allowBlank: false,
                    bind: {
                        store: '{product}'
                    }
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
        show: 'onProductionEditShow'
    }
});
