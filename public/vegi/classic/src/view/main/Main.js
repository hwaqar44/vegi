Ext.define('Vegi.view.main.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.button.Segmented',
		'Vegi.view.dashboard.Dashboard',
        'Vegi.view.main.MainController',
        'Vegi.view.production.MainTab',
       // 'Vegi.view.admin.role.Role',
		'Vegi.view.admin.AdminTab',
        'Ext.list.Tree'
    ],

    controller: 'main',
    viewModel: 'main',

    cls: 'sencha-dash-viewport',
    itemId: 'mainView',
    layout: 'border',

    listeners: {
        render: 'onMainViewRender'
    },

    items: [
        {
            xtype: 'panel',
            region: 'north',
            header: {
                height: '40',
                cls: 'sencha-dash-dash-headerbar shadow',
                itemId: 'headerBar',
                padding: 0,
                margin: 0,
                items:[
                    {
                        xtype: 'button',
                        height: 40,
                        border: false,
                        text: 'ADMIN',
                        cls: 'my-btn .x-btn-inner',
                       // iconCls: 'x-fa fa-user-o',
						listeners: {
							click: 'onRoleButtonClick'
						}
                    },
                    {
                        xtype: 'tbspacer',
                        width: 20
                    },
                    {
                        xtype: 'button',
                        border: false,
                        height: 40,
                        cls: 'my-btn .x-btn-inner',
                        text: 'PRODUCTIONS',
                      //  iconCls: 'x-fa fa-product-hunt',
                        selectable: false,
						listeners: {
							click: 'onProductionButtonClick',
                            mouseover: function() {
                                return {
                                    background : 'blue'
                                };
                            }
						}
                    },
                    {
                        xtype: 'tbspacer',
                        width: 20
                    },
                    {
                        xtype: 'button',
                        border: false,
                        text: 'AOP',
                        height: 40,
                       // iconCls: 'x-fa fa-flag',
                        cls: 'my-btn .x-btn-inner',
                        selectable: false,
						listeners: {
							click: 'onAopButtonClick'
						}
                    },
                    {
                        xtype: 'tbspacer',
                        width: 20
                    },
                    {
                        xtype: 'button',
                        border: false,
                        text: 'PURCHASE',
                        cls: 'my-btn .x-btn-inner',
                       // iconCls: 'x-fa fa-shopping-cart',
                        selectable: false,
						listeners: {
							click: 'onPurchaseButtonClick'
						}
                    },
                    {
                        xtype: 'tbspacer',
                        width: 20
                    },
                    {
                        xtype: 'button',
                        border: false,
                        text: 'BUDGET',
                        cls: 'my-btn .x-btn-inner',
                       // iconCls: 'x-fa fa-briefcase',
                        selectable: false,
						listeners: {
							click: 'onBudgetButtonClick'
						}
                    },
                    {
                        xtype: 'tbfill',
                        flex: 20
                    },
                    {
                        xtype: 'button',
                        iconCls:'x-fa fa-envelope',
                        cls: 'sencha-user-name',
                        ui: 'header',
                        href: '#email',
                        hrefTarget: '_self',
                        tooltip: 'Check your email'
                    },
                    {
                        xtype: 'button',
                        iconCls:'x-fa fa-question',
                        cls: 'sencha-user-name',
                        ui: 'header',
                        href: '#faq',
                        hrefTarget: '_self',
                        tooltip: 'Help / FAQ\'s'
                    },
                    {
                        xtype: 'button',
                        iconCls:'x-fa fa-sign-out',
                        ui: 'header',
                        href: '#logout',
                        hrefTarget: '_self',
                        cls: 'sencha-user-name',
                        tooltip: 'Logout'
                    },
                    {
                        xtype: 'tbtext',
                        text: 'Salman Hassan',
                        cls: 'sencha-user-name'
                    },
                    {
                        xtype: 'image',
                        cls: 'header-right-profile-image',
                        height: 35,
                        width: 35,
                        alt:'current user image',
                        src: 'resources/images/user-profile/2.png'
                    }
                ]
            }
        },
        {
            xtype: 'panel',
            region: 'center',
            name: 'mainpanel',
            itemId: 'mainpanel',
            layout: {
                type: 'fit',
                align: 'stretch'
            }
        },
        {
            xtype: 'panel',
            region: 'south',
            header: {
                cls: 'sencha-dash-dash-headerbar',
                height: 40,
                padding: 0,
                margin: 0,
            }
        }

       /* {
            xtype: 'maincontainerwrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    ui: 'navigation',
                    store: 'NavigationTree',
                    width: 250,
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }*/
    ]
});
