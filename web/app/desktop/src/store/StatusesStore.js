Ext.define('MyExtGenApp.store.StatusesStore', {
  extend: 'Ext.data.Store',
  model: 'MyExtGenApp.model.Statuses',
  xtype: 'statusesStore',
  autoLoad: true,

  proxy: {
    type: 'ajax',
    // cors: true,
    useDefaultXhrHeader: false,
    // withCredentials: true,
    method: 'POST',
    url : 'http://localhost:8080/statuses/',
  }
});