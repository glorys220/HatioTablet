Ext.define('Hatiopia.view.nav.NavBlog', {
	extend: 'Ext.dataview.List',
	xtype: 'nav_blog',
	
	requires: [
    'Ext.dataview.List'
    ],
	
	config: {
		title: 'Blog',
		
		disclosure: true,
		
		store: Ext.create('Ext.data.Store', {
			fields : ['blogId', 'desc'],
			data: [{
				blogId: 'blog_post',
				desc: 'Post'				
			}, {
				blogId: 'blog_movie',
				desc: 'Movie'
			}, {
				blogId: 'blog_gallery',
				desc: 'Gallery'
			}, {
				blogId: 'blog_img',
				desc: 'Gallery 2'
			}]
		}),

		itemTpl: '<div class="blog"><strong>{desc}</strong></div>'
	}
});