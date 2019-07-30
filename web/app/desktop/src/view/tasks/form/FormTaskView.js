Ext.define('MyExtGenApp.view.tasks.form.FormTaskView', {
  extend: 'Ext.form.Panel',
  xtype: 'formTaskView',
  cls: 'formTaskView',
  // requires: [
  //   'Ext.grid.Row'
  // ],
  controller: {type: 'formTaskViewController'},
  viewModel: {type: 'formTaskViewModel'},
  store: {type: 'formTaskViewStore'},

  //fullscreen: true,
  items: [
    {
      xtype: 'fieldset',
      title: 'New Task',
      items: [
        {
          xtype: 'numberfield',
          name: 'number',
          label: 'Number',
          title: 'Number',
        },
        {
          xtype: 'textfield',
          name: 'name',
          label: 'Name',
          title: 'Name',
          bind: '{name}'
        },
        {
          xtype: 'fieldset',
          title: 'From',
          label: 'From',
          layout: 'fit',
          hideOnMaskTap: true,
          autoSelect: true,
          items: [{
            xtype: 'selectfield',
            label: 'Choose one',
            displayField: 'firstName',
            itemTpl: '{firstName} {lastName}',
            store: 'MyExtGenApp.store.UserStore',
            name: 'fromId',
            listeners: {
              select: function () {
              },
            },
            valueField: 'id'
          }],
        },
        {
          xtype: 'fieldset',
          title: 'To',
          label: 'To',
          hideOnMaskTap: true,
          autoSelect: true,
          items: [{
            xtype: 'selectfield',
            label: 'Choose one',
            displayField: 'firstName',
            itemTpl: '{firstName} {lastName}',
            valueField: 'id',
            name: 'toId',
            store: 'MyExtGenApp.store.UserStore'
          }],
        },
        {
          xtype: 'fieldset',
          title: 'Status',
          label: 'Status',
          hideOnMaskTap: true,
          autoSelect: true,
          items: [{
            xtype: 'selectfield',
            label: 'Choose one',
            displayField: 'name',
            itemTpl: '{name}',
            valueField: 'id',
            name: 'statusId',
            store: 'MyExtGenApp.store.StatusesStore'
          }],
        },
      ],
    }
  ],

  proxy: {
    type: 'ajax',
    api: {
      read: 'read.php',
      create: 'create.php',
      update: 'update.php',
      destroy: 'delete.php'
    }
  },


  type: 'ajax',
  useDefaultXhrHeader: false,
  method: 'POST',
  url: 'http://localhost:8080/task/add',
});
