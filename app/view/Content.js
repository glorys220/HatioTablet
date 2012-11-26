Ext.define('Hatiopia.view.Content', {
    extend : 'Ext.Panel',

    xtype : 'content',

    config : {
		title : 'Hatiopia',
		
		layout : 'card',
		
        items : [
		{
			id : 'header',
			xtype : 'header',
			docked : 'top'
		},
		{
			id : 'launch',
            scrollable : true
		}
		]
    }
});
