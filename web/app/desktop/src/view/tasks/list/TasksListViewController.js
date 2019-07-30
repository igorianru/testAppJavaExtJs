Ext.define('MyExtGenApp.view.tasks.TasksListViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.tasksListViewController',

	onItemSelected: function (sender, record) {
		// Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	onConfirm: function (choice) {
		if (choice === 'yes') {
			//
		}
	}
});
