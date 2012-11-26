Ext.define('Hatiopia.view.admin.Domain', {
	extend : 'Ext.Panel',
	
	xtype : 'admin_domain',
	
	requires: [
    'Ext.Panel'
    ],
	
	config : {			
		layout: 'fit'
	},
	
	constructor : function(config) {
		config.items = [ this.buildList() ];		
		this.callParent(arguments);		
		this.refresh();
	},
	
	refresh : function() {
		var self = this;
		Ext.Ajax.request({
			url: window.location.pathname.indexOf('/m/') === 0 ? '/admin/domain' : 'data/domain.json',
			method : 'GET',
			params : { 
				id : ''
			},
			success: function(response) {		    	
			    var resultObj = Ext.JSON.decode(response.responseText);

			    if(resultObj.success) {
					var records = resultObj.items;
					self.down('[itemId=domain]').setData(records);
				} else {
				   	Ext.MessageBox.alert(T('label.failure'), resultObj.msg);
				}
			},
			failure: function(response) {
				Ext.MessageBox.alert(T('label.failure'), response.responseText);
			}
		});
	},
	
	buildList : function() {
		return {
			xtype : 'list',
			itemId : 'domain',
			store: Ext.create('Ext.data.JsonStore', {
				fields: ['id', 'name', 'description', 'timezone', 'system'],
				data: []
			}),
			scrollable : 'vertical',
			itemTpl : new Ext.XTemplate(
				'<table>',
					'<tr>',
						'<th>ID</th>',
						'<th>Name</th>',
						'<th>Description</th>',
						'<th>Timezone</th>',
						'<th>System</th>',
					'</tr>',
					'<tpl for=".">',
					'<tr>',
						'<td>{id}</td>',
						'<td>{name}</td>',
						'<td>{description}</td>',
						'<td>{timezone}</td>',
						'<td>{system}</td>',
					'</tr>',
					'</tpl>',
				'</table>'
			),
			listeners:
			{
				itemtap: function(view, index, target, record)
				{
					this.overlay = new Ext.Panel({
						modal:true,
						centered:true,
						floating:true,
						scrollable : 'vertical',
						width: 450,
						height:450,
						items: [
						{
							xtype: 'fieldset',
							title: 'Domain',
							items: [
							{
								xtype: 'textfield',
								label: 'id',
								name: 'id',
								value: record.data.id
							}, {
								xtype: 'textfield',
								label: 'name',
								name: 'name',
								value: record.data.name
							}, {
								xtype: 'textfield',
								label: 'description',
								name: 'description',
								value: record.data.description
							}, {
								xtype: 'textfield',
								label: 'timezone',
								name: 'timezone',
								value: record.data.timezone
							}, {
								xtype: 'textfield',
								label: 'system',
								name: 'system',
								value: record.data.system
							}]
						}, {
							xtype: 'button',
							ui: 'confirm',
							text: 'Save',
							width: '30%',
							left: '50px'
						}, {
							xtype: 'button',
							text: 'Cancel',
							width: '30%',
							right: '50px',
							action: 'Cancel',
							listeners: {
								tap : function() {
									this.up().hide();
								}
							}
						}]
					});

					this.overlay.show();
				}
			}
		};
	}
});