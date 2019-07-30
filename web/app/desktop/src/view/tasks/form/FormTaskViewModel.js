Ext.define('MyExtGenApp.view.tasks.FormTaskViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.formTaskViewModel',
	data: {
		name: 'MyExtGenApp'
	},

	// stores: {
	// 	model: 'store.formTaskViewStore',
	// 	autoLoad: true,
	// 	session: true
	// }

	store: {type: 'formTaskViewStore', autoLoad: true,	session: true},

	// stores: {
	// 	// Define a store of Customer records that links to the Session.
	// 	customers: {
	// 		model: 'KitchenSink.model.Customer',
	// 		autoLoad: true,
	// 		session: true
	// 	}
	// }

	// stores: {
	// 	// Define a store of Customer records that links to the Session.
	// 	customers: {
	// 		model: 'MyExtGenApp.view.tasks.form.FormTaskViewStore',
	// 		autoLoad: true,
	// 	//	session: true
	// 	}
	// },

	// fields: ['name', {
	// 	name: 'phone'
	// }],
	//
	// proxy: {
	// 	type: 'ajax',
	// 	url: 'data1.json'
	// },
	//
	// validators: {
	// 	name: 'presence'
	// }


});

