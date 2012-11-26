Ext.define("Hatiopia.view.Main", {
    extend: 'Ext.Container',

	xtype: 'main',
	
    requires: [
        'Ext.navigation.View',
        'Ext.navigation.Bar',
		'Hatiopia.view.Nav',
		'Hatiopia.view.Content',
		'Hatiopia.view.Header'
    ],
    
	constructor : function(config) {
		config = config || {};
		config.items = this.buildItems();
		
		this.callParent([config]);
		
		var self = this;
	},

	buildItems : function() {
        return [
        {
            id: 'nav',
            xtype: 'nav',
            docked: 'left',
            width: 255
        },
        {
            id: 'content',
            xtype: 'content'
        }
        ]
	},
	
    config: {
        fullscreen: true,

        layout: {
            type: 'card'
        }
    }
});