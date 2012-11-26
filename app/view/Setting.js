Ext.define('Hatiopia.view.Setting', {
    extend: 'Ext.form.Panel',

    xtype: 'setting',

	constructor : function(config) {
		config.items = this.buildItems();
		
		this.callParent(arguments);
		
		this.on('erased', function() {
			this.destroy();
		});
	},
	
	buildItems : function() {
		var items = [{
			xtype : 'fieldset',
			items : [{
	            xtype: 'toolbar',
	            title: 'setting',
	            docked: 'top'
	        },
	        {
	            xtype: 'selectfield',
	            label: 'Domain Change',
	            name: 'refreshTerm',
	            valueField: 'value',
	            displayField: 'display',
				// value : Hatiopia.setting.get('refreshTerm'),
				listeners : {
					change : function(field, newVal) {
						// Hatiopia.setting.set(field.getName(), newVal);
					}
				},
	            store: {
	                data: [{
	                    value: -1,
	                    display: '변경 안함'
	                },
	                {
	                    value: 3,
	                    display: 'tes1'
	                },
	                {
	                    value: 5,
	                    display: 'test2'
	                },
	                {
	                    value: 10,
	                    display: 'test3'
	                }]
	            }
	        },
	        {
	            xtype: 'selectfield',
	            label: '정보보기',
	            name: 'dockPosition',
	            valueField: 'value',
	            displayField: 'display',
				// value : Hatiopia.setting.get('dockPosition'),
				listeners : {
					change : function(field, newVal) {
						// Hatiopia.setting.set(field.getName(), newVal);
					}
				},
	            store: {
	                data: [{
	                    value: 'left',
	                    display: 'left'
	                },
	                {
	                    value: 'right',
	                    display: 'right'
	                }]
	            }
			}]
        }, {
			xtype: 'button',
			text: '로그아웃',
			docked: 'bottom',
			listeners: {
				tap: function() {
					Ext.Msg.confirm('Logout', 'Are you sure you want to be signed out ?', function(confirm) {
						if (confirm === 'yes') {
							document.location.href = '/logout';
						}
					});
				}
			}
		}];
		
		return items;
	},
	
    config: {
        left: 0,
        top: 0,

        modal: true,

		showAnimation : 'fadeIn',
        hideOnMaskTap: true,
		hideAnimation : 'fadeOut',

        width: 400,
        height: 500,
        scrollable: true
    }
});