Ext.define('MyExtGenApp.view.tasks.FormTaskViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.formTaskViewController',

	onItemSelected: function (sender, record) {
		// Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	onConfirm: function (choice) {
		if (choice === 'yes') {
			//
		}
	}
});
