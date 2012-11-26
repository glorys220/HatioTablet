Ext.define('Hatiopia.view.blog.Gallery', {
	extend: 'Ext.Carousel',
	xtype: 'blog_gallery',
	
	requires: [
		'Hatiopia.view.blog.ImageViewer'
	],
	
	config: {
		fullscreen: true,
		layout: 'fit',
		items: [
		{
			xtype: 'imageviewer',
			style: {
				backgroundColor: '#255'
			},
			imageSrc: 'http://cdn.macrumors.com/article/2010/09/03/145454-itunes_10_icon.jpg'
		},
		{
			xtype: 'imageviewer',
			style: {
				backgroundColor: '#255'
			},
			imageSrc: 'http://www.baixandowallpapers.com/wallpapers/03-2011/lua-cheia-paisagem-noite-1299711122.jpg'
		},
		{
			xtype: 'imageviewer',
			style: {
				backgroundColor: '#255'
			},
			imageSrc: 'http://www.baixandowallpapers.com/wallpapers/03-2011/lua-cheia-paisagem-noite-1299711122.jpg'
		}
		],
		listeners: {
			activeitemchange: function( container,value, oldValue,eOpts ){
				oldValue.resetZoom();
				this.getActiveItem().rotate();
			},
			resize: function( component , eOpts ){
				this.getActiveItem().rotate();
			}

		},
	},

	onDragStart: function (e) {
		var scroller = this.getActiveItem().getScrollable().getScroller();
		if (e.targetTouches.length == 1 && (e.deltaX < 0 && scroller.getMaxPosition().x === scroller.position.x) || (e.deltaX > 0 && scroller.position.x == 0)) {
			this.callParent(arguments);
		}
	},
	onDrag: function (e) {
		if (e.targetTouches.length == 1)
		this.callParent(arguments);
	},
	onDragEnd: function (e) {
		if (e.targetTouches.length < 2)
		this.callParent(arguments);
	}
});