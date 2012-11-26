Ext.define('Hatiopia.view.Login', {
    extend: 'Ext.form.Panel',

    xtype: 'login',

    config: {
		title: 'Home',
		modal: true,
		showAnimation : 'fadeIn',
		hideOnMaskTap: true,
		hideAnimation: 'fadeOut',
		width: 400,
		height: 500,
		scrollable: true,


		items: [{
			xtype: 'fieldset',
			defaults: {
				labelWidth: '32%'
			},
			instructions: '(Please provide all credentials to login)',
			layout: {
				type: 'vbox'
			},
			items: [
			{
				xtype: 'emailfield',
				id: 'joinEmail',
				label: 'email',
				placeHolder: 'asdf@gmail.com',
				useClearIcon: true,
				allowBlank:false	
			},
			{
				xtype: 'passwordfield',
				id: 'password',
				label: '비밀번호',
				placeHolder: 'password',
				useClearIcon: true	
			},
			{
				xtype: 'textfield',
				id: 'serverurl',
				label: 'Server',
				placeHolder: 'http://user.domain.com'
			}]
		},
		{
			xtype: 'button',
			ui: 'confirm',
			text: 'Login',
			width: '30%',
			left: '100px',
			action: 'submitLogin'
		}]
	}
});