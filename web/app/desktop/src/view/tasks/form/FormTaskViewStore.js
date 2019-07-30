Ext.define('MyExtGenApp.view.tasks.form.FormTaskViewStore', {
	extend: 'Ext.data.Store',
	alias: 'store.formTaskViewStore',

	fields: [
		'number', 'name', 'from', 'to', 'status'
	],

	autoLoad: true,
	proxy: {
		type: 'ajax',
		useDefaultXhrHeader: false,
		method: 'POST',
		url: 'http://localhost:8080/tasksa/',
	}


	// stores: {
	// 	// Define a store of Customer records that links to the Session.
	// 	customers: {
	// 		model: 'KitchenSink.model.Customer',
	// 		autoLoad: true,
	// 		session: true
	// 	}
	// },

	// fields: [
	// 	'number', 'name', 'from', 'to', 'status'
	// ],
	// data: { items: [
	// 	{ name: 'Jean Luc',   email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
	// 	{ name: 'ModernWorf', email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
	// 	{ name: 'Deanna',     email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
	// 	{ name: 'Data',       email: "mr.data@enterprise.com",        phone: "555-444-4444" }
	// ]},
	// autoLoad: true,
	//
	// proxy: {
	// 	type: 'ajax',
	// 	// cors: true,
	// 	useDefaultXhrHeader: false,
	// 	// withCredentials: true,
	// 	method: 'POST',
	// 	url : 'http://localhost:8080/task/1',
	// }
});
