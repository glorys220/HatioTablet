Ext.Loader.setPath({
    'Ext': 'sdk/src',
	'Hatiopia': 'app',
	'Hatiopia.mixin': 'app/mixin'
});

// Ext.define('Hatiopia', {
// 	singleton: true,
// 	mixins: {
// 		setting : 'Hatiopia.mixin.Setting'
// 	}
// });

Ext.application({
    name: 'Hatiopia',

    requires: [
        'Ext.MessageBox'
    ],

	controllers: ['Nav', 'Blog', 'Main', 'Report', 'Admin'],
    views: ['Main', 'Setting'],

	socket : null,

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

		var self = this;
		
		Ext.Ajax.request({
			url : 'data/user.json',
			success : function(response) {
				var user = Ext.JSON.decode(response.responseText);
				if(user.success) {
					self.connectToWebsocket();
					Ext.Viewport.add(Ext.create('Hatiopia.view.Main'));
				} else {
					Ext.Msg.confirm('Unauthorized User', 'Do you want to move to registration page ?', function ( answer ) { 
						if( answer == 'yes') { 
							document.location.href = "/register";
						} else { 
							document.location.href = "/logout";
						}
					});
				}
			},
			failure : function(response) {
				if(response.status >= 400 && response.status < 500) {
					Ext.Msg.confirm('Unauthenticated User', 'Do you want to move to login page ?', function ( answer ) { 
						if( answer == 'yes') { 
							document.location.href = "/logout";
						}
					});
				} else {
					Ext.Msg.alert('ERROR', '[CODE: ' + response.status + '] ' + response.statusText);
				}
			}
		});
    },

	connectToWebsocket : function() {
		var self = this;
		this.socket = io.connect('127.0.0.1', {port: 52273});
		this.registerUser();
		
		this.socket.on('message', function(message) {
			var connMsg = Ext.JSON.decode(message);
			if(connMsg.type == 'connection') {
				alert(connMsg.data);
			}else if(connMsg.type == 'alram') {
				Ext.Msg.alert("Message", connMsg.contents, Ext.emptyFn);
			}
		});
	},
	
	registerUser : function() {
		var connMsg = JSON.stringify({type:'connection', loginId:'10', loginName:'test'});
		this.socket.emit('connection', connMsg);
	},

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
