Ext.define('MyExtGenApp.view.main.header.HeaderView', {
	extend: 'Ext.Toolbar',
	xtype: 'headerview',
	cls: 'headerview',
	items: [
		{ 
			xtype: 'container',
			cls: 'headerviewtext',
			bind: { html: '{heading}' }
		},
		'->',
		{
			id: 'handlerTop',
			xtype: 'button',
			ui: 'headerbutton',
			reference: 'detailtoggle',
			handler: 'onHeaderViewDetailToggle',
			iconCls: 'x-fa fa-arrow-left'
		}
	]
});
