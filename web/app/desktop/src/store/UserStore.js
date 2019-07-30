Ext.define('MyExtGenApp.store.UserStore', {
  extend: 'Ext.data.Store',
  model: 'MyExtGenApp.model.User',
  xtype: 'userStore',
  autoLoad: true,

  proxy: {
    type: 'ajax',
    // cors: true,
    useDefaultXhrHeader: false,
    // withCredentials: true,
    method: 'POST',
    url : 'http://localhost:8080/users/',
  }
});