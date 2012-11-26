Ext.define('Hatiopia.model.User', {
    
	extend: 'Ext.data.Model',
    
	fields : [ {
		name : 'id',
		type : 'string'
	}, {
		name : 'email',
		type : 'string'
	}, {
		name : 'name',
		type : 'string'
	}, {
		name : 'sign_in_count',
		type : 'integer'
	}, {
		name : 'current_sign_in_at',
		type : 'date',
		dateFormat : 'time'		
	}, {
		name : 'last_sign_in_at',
		type : 'date',
		dateFormat : 'time'
	}, {
		name : 'current_sign_in_ip',
		type : 'string'
	}, {
		name : 'last_sign_in_ip',
		type : 'string'		
	}, {
		name : 'admin_flag',
		type : 'boolean'
	}, {
		name : 'default_domain_id',
		type : 'string'
	}, {
		name : 'timezone',
		type : 'string'
	}, {
		name : 'lang',
		type : 'string'
	}, {
		name : 'created_at',
		type : 'date'
	}, {
		name : 'updated_at',
		type : 'date'
	} ],
	
	proxy: {
		type: 'ajax',
		//url : window.location.pathname.indexOf('/test') === 0 ? 'data/users.json' : '/admin/users.json',
		url : '/admin/users.json',
		reader: {
			type: 'json',
			root: 'results'
		}
	}
});