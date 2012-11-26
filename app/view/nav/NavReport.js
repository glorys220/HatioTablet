Ext.define('Hatiopia.view.nav.NavReport', {
	extend: 'Ext.dataview.List',
	xtype: 'nav_report',
	
	requires: [
    'Ext.dataview.List'
    ],
	
	config: {
		title: 'Report',

		store: Ext.create('Ext.data.Store', {
			fields : ['reportId', 'desc'],
			data : [{
				reportId : 'rpt_area',
				name : 'AreaChart',
				desc : 'AreaChart'
			}, {
				reportId : 'rpt_bar',
				name : 'BarChart',
				desc : 'BarChart'
			}]
		}),

        itemTpl: '<div class="iconChart"><strong>{desc}</strong></div>'
	}
});