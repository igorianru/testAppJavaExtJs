Ext.define('MyExtGenApp.view.tasks.TasksListViewStore', {
  extend: 'Ext.data.Store',
  alias: 'store.tasksListViewStore',

  fields: [
    'number', 'name', 'from', 'to', 'status'
  ],

  autoLoad: true,
  proxy: {
    type: 'ajax',
    useDefaultXhrHeader: false,
    method: 'POST',
    url: 'http://localhost:8080/tasks/',
  }
});