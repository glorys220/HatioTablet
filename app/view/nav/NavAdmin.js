Ext.define('Hatiopia.view.nav.NavAdmin', {
	extend: 'Ext.dataview.List',
	xtype: 'nav_admin',
	
	requires: [
    'Ext.dataview.List'
    ],
	
	config: {
		title: 'Admin',

		store: Ext.create('Ext.data.Store', {
			fields : ['adminId', 'desc'],
			data : [{
				adminId : 'admin_domain',
				name : 'Domain',
				desc : 'Domain'
			}, {
				adminId : 'admin_user',
				name : 'User',
				desc : 'User'
			}]
		}),

        itemTpl: '<div class="iconChart"><strong>{desc}</strong></div>'
	}
});