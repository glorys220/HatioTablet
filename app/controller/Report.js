Ext.define('Hatiopia.controller.Report', {
    extend: 'Ext.app.Controller',

	requires : [
		'Hatiopia.view.report.AreaChart',
		'Hatiopia.view.report.BarChart'
	],
	
    config: {
        refs: {
            content : 'content',
			header : 'header',
			navReport :'nav_report'
        },

        control: {
			'nav_report' : {
				itemtap : 'onItemTap'
			}
        }
    },

	onItemTap : function(view, index, target, record) {
		this.showReport(record.get('reportId'));
	},
	
	showReport : function(report) {
		var view = this.getContent().getComponent(report);
		if(!view) {
			this.getContent().removeAll();
			view = this.getContent().add({
				xtype : report
			});
		}
		this.getContent().setActiveItem(view);
		
		return view;
	}
});
