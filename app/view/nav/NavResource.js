Ext.define('Hatiopia.view.nav.NavResource', {
	extend: 'Ext.List',
	xtype: 'nav_resource',
	
	requires: [
    'Ext.List'
    ],
	
	config: {
		title: 'Resource',

		itemTpl: '<div class="resource"><strong>{title}</strong></div>',
		
		data: [{
			title: 'Role'
		}, {
			title: 'ResourceScheme'
		}, {
			title: 'CodeMaster'
		}, {
			title: 'Favorite'
		}, {
			title: 'Job'
		}],
		
		listeners: {
			itemtap: function (list, index, item, record) {
				alert(record.getData().title);
			}
		}
	}
});