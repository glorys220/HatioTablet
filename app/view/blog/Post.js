Ext.define('Hatiopia.view.blog.Post', {
	extend: 'Ext.Panel',
	xtype: 'blog_post',
	
	requires: [
		'Ext.TitleBar',
		'Hatiopia.view.blog.ImageGallery'
	],
	config: {
		tabBarPosition: 'bottom',


		items: [{
			title: 'Gallery',


			items: [{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Gallery',
				style: 'margin-bottom:10px',
			},
			{
				xtype: 'imageGallery',
				style: 'margin:10px',
				scrollable: false,
				store: {
					data:[
						{photo: 'http://2.bp.blogspot.com/-SwRvvHer_wQ/T6GhgnQoS0I/AAAAAAAHhkY/iyxaoyoC-2g/s800/Kia-K9-01.jpg'},
						{photo: 'http://4.bp.blogspot.com/-8iGyCfFuLuU/T5QA-1t4QTI/AAAAAAAAAXg/izbeFI2PvC0/s1600/korea.jpg'},
						{photo: 'http://2.bp.blogspot.com/-SwRvvHer_wQ/T6GhgnQoS0I/AAAAAAAHhkY/iyxaoyoC-2g/s800/Kia-K9-01.jpg'},
						{photo: 'http://media.lonelyplanet.com/lpi/24744/24744-14/469x264.jpg'},
						{photo: 'http://3.bp.blogspot.com/-kyrXb2orUgA/Te9KO0AxR5I/AAAAAAAAErY/X_XkbgU107Q/s1600/Blue_Ocean_17723522_std.jpg'},
						{photo: 'http://1.bp.blogspot.com/-iOPb28o8svc/TpvN-dWORKI/AAAAAAAAAuw/8pPLujrCSQ0/s1600/toronto.jpg'},
						{photo: 'http://www.nyspsych.org/SiteCollectionImages/NYCSkylinelandingpage.jpg'},
						{photo: 'http://www.ebaytemplate.info/wp-content/gallery/germany/elbe-river-dresden-germany.jpg'},
						{photo: 'http://www.feratel.com/uploads/pics/Italien_1_01.jpg'},
						{photo: 'http://blog.educationusa.or.kr/wp-content/uploads/2008/07/dokdo-islets.jpg'},
						{photo: 'http://www.yarbridgeinn.co.uk/user/sites/yarbridgeinn.co.uk/files/UK%20Travel%20on%20a%20Shoestring%20Budget.jpg'},
						{photo: 'http://villaluxe.com/wp-content/gallery/pamillaretreat/maxico-palmilla-04.jpg'},
						{photo: 'http://www.cbrconnection.com/agent_files/Hawaii%20web9.jpg'},
					],
				},
			},
			]
		}
		]
	}
});