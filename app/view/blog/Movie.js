Ext.define('Hatiopia.view.blog.Movie', {
	extend: 'Ext.Panel',
	xtype: 'blog_movie',
	
	requires: [
		'Ext.Video',
	    'Ext.Panel'
	],
	
	config: {
		layout: 'fit',
	},
	
	constructor : function(config) {
		config.items = [ this.buildMovieList() ];		
		this.callParent(arguments);		
		this.refresh();
	},
	
	refresh : function() {
		var self = this;
		Ext.Ajax.request({
			url: window.location.pathname.indexOf('/m/') === 0 ? '/admin/domain' : 'data/movie.json',
			method : 'GET',
			params : { 
				id : ''
			},
			success: function(response) {		    	
			    var resultObj = Ext.JSON.decode(response.responseText);

			    if(resultObj.success) {
					var records = resultObj.items;
					self.down('[itemId=movie]').setData(records);
				} else {
				   	Ext.MessageBox.alert(T('label.failure'), resultObj.msg);
				}
			},
			failure: function(response) {
				Ext.MessageBox.alert(T('label.failure'), response.responseText);
			}
		});
	},
	
	buildMovieList : function() {
		return {
			xtype : 'list',
			itemId : 'movie',
			store: Ext.create('Ext.data.JsonStore', {
				fields: ['img', 'src'],
				data: []
			}),
			itemTpl : new Ext.XTemplate(
					'<tpl for=".">',
						'<img src="{img}">',
					'</tpl>'
			),
			listeners:
			{
				itemtap: function(view, index, target, record)
				{
					console.log(record.data.img);
					this.overlay = new Ext.Panel({
						modal:true,
						centered:true,
						floating:true,
						scrollable : 'vertical',
						width: 450,
						height:450,
						items: [
						{
							xtype: 'video',
							url: record.data.src,
							loop: true,
							posterUrl: record.data.img
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