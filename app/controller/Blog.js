Ext.define('Hatiopia.controller.Blog', {
    extend: 'Ext.app.Controller',

	requires : [
		'Hatiopia.view.blog.Post',
		'Hatiopia.view.blog.Movie',
		'Hatiopia.view.blog.Gallery',
		'Hatiopia.view.blog.Img'
	],
	
    config: {
        refs: {
            navBlog : 'nav_blog',
            content : 'content',
			header : 'header'
        },

        control: {
			'nav_blog' : {
				itemtap : 'onItemTap'
			}
        }
    },

	onItemTap : function(view, index, target, record) {
		this.showBlog(record.get('blogId'));
	},
	
	showBlog : function(blog) {
		var view = this.getContent().getComponent(blog);
		if(!view) {
			this.getContent().removeAll();
			view = this.getContent().add({
				xtype : blog
			});
		}
		this.getContent().setActiveItem(view);
		
		return view;
	}
});
