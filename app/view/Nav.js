Ext.define('Hatiopia.view.Nav', {
    extend: 'Ext.navigation.View',

    xtype: 'nav',

    requires: [
    'Ext.dataview.List',
	'Hatiopia.view.nav.NavAdmin',
	'Hatiopia.view.nav.NavBlog',
	'Hatiopia.view.nav.NavResource',
	'Hatiopia.view.nav.NavReport'
    ],

    config: {

        items: [
        {
            xtype: 'container',
            layout: {
                type: 'vbox'
            },
            items: [
            {
                xtype: 'button',
                id: 'nav_admin',
                text: 'Admin'
            },
            {
                xtype: 'button',
                id: 'nav_resource',
                text: 'Resource'
            },
            {
                xtype: 'button',
                id: 'nav_blog',
                text: 'Blog'
            },
			{
				xtype: 'button',
				id: 'nav_report',
				text: 'Report'
			},
			{
				xtype: 'toolbar',
				docked: 'bottom',
				items: [
				{
					xtype: 'spacer'
				},
				{
					xtype: 'button',
					id: 'tab1',
					text: 'tab1'
				},
				{
					xtype: 'button',
					id: 'tab2',
					text: 'tab2'
				}]
			}]
        }]
    }

	// initialize : function() {
	// 	var toolbar = {
	// 		xtype : 'toolbar',
	// 		docked : 'bottom',
	// 		items: [
	// 		{
	// 			xtype: 'spacer'
	// 		},
	// 		{
	// 			xtype: 'button',
	// 			id: 'tab1',
	// 			text : 'tab1'
	// 		},
	// 		{
	// 			xtype: 'button',
	// 			id: 'tab2',
	// 			text: 'tab2'
	// 		}]
	// 	}
	// 	this.add([toolbar])
	// }
});