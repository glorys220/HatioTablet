Ext.define('Hatiopia.controller.Admin', {
    extend: 'Ext.app.Controller',

	requires : [
		'Hatiopia.view.admin.Domain'
	],
	
    config: {
        refs: {
            navAdmin : 'nav_admin',
            content : 'content',
			header : 'header'
        },

        control: {
			'nav_admin' : {
				itemtap : 'onItemTap'
			}
        }
    },

	onItemTap : function(view, index, target, record) {
		this.showBlog(record.get('adminId'));
	},
	
	showBlog : function(admin) {
		var view = this.getContent().getComponent(admin);
		if(!view) {
			this.getContent().removeAll();
			view = this.getContent().add({
				xtype : admin
			});
		}
		this.getContent().setActiveItem(view);
		
		return view;
	}
});
