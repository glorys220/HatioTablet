Ext.define('Hatiopia.view.Header', {
	extend : 'Ext.TitleBar',
	
	xtype : 'header',
	
	config : {
		title : 'Hatiopia',
		items : [{
			itemId : 'home',
			text : 'Home',
			align : 'right'
		}, {
			itemId : 'setting',
			text : 'Setting',
			align : 'right'
		}, {
			itemId : 'chat',
			text : 'Chat',
			align : 'right'
		}, {
			itemId : 'login',
			text : 'Login',
			align : 'right'
		}]
		// items : [
		// 			{
		// 				text : 'Admin',
		// 				align : 'left',
		// 			},
		// 			{
		// 				text : 'Resource',
		// 				align : 'left',
		// 			},
		// 			{
		// 				text : 'Blog',
		// 				align : 'left',
		// 			}
		// 	    ]
	}
});