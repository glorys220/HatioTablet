Ext.define('Hatiopia.view.blog.Img', {
	extend: 'Ext.navigation.View',
	xtype: 'blog_img',
	
	requires: [
		'Hatiopia.view.blog.ImgDetail',
	    'Ext.Panel'
	],
	
	config: {
		layout: 'card',
		animation: true,
		showAnimation : 'fadeIn',
		hideAnimation : 'fadeOut',
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
					self.down('[itemId=imageView]').setData(records);
				} else {
				   	Ext.MessageBox.alert('failure', resultObj.msg);
				}
			},
			failure: function(response) {
				Ext.MessageBox.alert('failure', response.responseText);
			}
		});
	},
	
	buildMovieList : function() {
		var self = this;
		return {
			xtype : 'list',
			title : 'Image List',
			itemId : 'imageView',
			store: Ext.create('Ext.data.JsonStore', {
				fields: ['img', 'src'],
				data: []
			}),
			itemTpl : new Ext.XTemplate(
				'<table>',
					'<tpl for=".">',
						'<tr>',
							'<td>',
								'<img src="{img}" width="100" height="100">',
							'</td>',
							'<td>',
								'{img}',
							'</td>',
						'</tr>',
					'</tpl>',
				'</table>'
			),
			// onItemDisclosure : {
				// handler: function(record, btn, index){
					// self.push({
			            // xtype: 'imgdetail',
			            // title: 'adsf',
			            // data: record.getData()
			        // })
				// }
			// }
			listeners: {
				itemtap: function(view, index, target, record) {
					self.push({
			            xtype: 'imgdetail',
						animation: true,
			            title: 'Image View',
			            data: record.getData()
			        })
				}
			}
		};
	}
});