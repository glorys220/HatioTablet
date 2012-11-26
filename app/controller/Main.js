Ext.define('Hatiopia.controller.Main', {
    extend: 'Ext.app.Controller',

	socket : null,
	
    config: {
		
        refs: {
            main: 'main',
            nav: 'nav',
            content: 'content',
			header : 'header'
        },

        control: {
			'header #chat' : {
				tap : 'onAlarm'
			},
			'header #login' : {
				tap : 'onLogin'
			},
			'header #home' : {
				tap : 'onHome'
			},
			'header #setting' : {
				tap : 'onSetting'
			}
        }
    },

	onAlarm : function(button, e) {
		this.socket = Hatiopia.app.socket;
		var self = this;
		
		Ext.Msg.prompt("Send Alarm", "message", function(btn, text) {
			if (btn == 'ok') {
				var connMsg = JSON.stringify({type:'alram', loginId:'10', loginName:'test', contents:text});
				self.socket.emit('alram', connMsg);
			}
		},
		this,
		false,
		null,
		{
			xtype     : 'textfield',
		    clearIcon : true,
		    listeners : {
				action : function () {
		            var promptButtons = Ext.Msg.down('button[itemId=ok]');
		            Ext.Msg.onClick(promptButtons);
		        },
		        keyup  : function (textfield, e) {
		            if (e.event.keyCode === 27) { //escape key
		                var promptButtons = Ext.Msg.down('button[itemId=ok]');
		                Ext.Msg.onClick(promptButtons);
		            }
		        }
		    }
		});
	},
	
	onLogin : function(button, e) {
		Ext.create('Hatiopia.view.Login').show();
	},
	
	onHome : function(button, e) {
		document.location.href = window.location.pathname;
	},
	
	onSetting : function(button, e) {
		Ext.create('Hatiopia.view.Setting', {}).showBy(button);
	}

});
