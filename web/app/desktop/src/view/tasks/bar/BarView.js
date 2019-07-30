Ext.define('MyExtGenApp.view.tasks.bar.BarView', {
  extend: 'Ext.Toolbar',
  xtype: 'barview',
  cls: 'barview',
  shadow: false,
  items: [
    {
      xtype: 'button',
      iconCls: "x-fa fa-plus",
      text: 'Create New',
      ui: 'confirm',

      handler: function () {
        Ext.create('Ext.window.Window', {
          title: 'Create New Task',
          height: 800,
          width: 1000,
          layout: 'fit',
          items: [
            {xtype: 'formTaskView', reference: 'formTaskView'},
          ],
          bbar: {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
              {
                xtype: 'button',
                text: 'Close',
                docked: 'left',
                ui: 'normal',
                handler: function () {
                  this.up('window').close();
                }
              },
              {
                xtype: 'button',
                text: 'Save',
                docked: 'right',
                ui: 'confirm',

                handler: function () {
                  Ext.ComponentQuery.query('formTaskView')[0].submit({
                    type: 'ajax',
                    useDefaultXhrHeader: false,
                    method: 'POST',

                    success: function() {
                      Ext.ComponentQuery.query('tasksListView')[0].store.load();
                      this.up('window').close();
                    },

                    failure: function(er) {
                      Ext.ComponentQuery.query('tasksListView')[0].store.load();
                      this.up('window').close();
                    },
                  });


                }
              }
            ]
          },
        }).show();

      }
    },

    {
      xtype: 'button',
      iconCls: "x-fa fa-trash",
      text: 'Remove This',
      ui: 'decline',

      handler: function () {
        var id = (((Ext.ComponentQuery.query('tasksListView')[0].getSelected().items[0]) || {}).data || {}).id || 0;

        if (!id)
          Ext.Msg.alert('Please select Row for remove.');

        Ext.Ajax.request({
          url: `http://localhost:8080//task/delete/${id}`,
          method: 'POST',
          type: 'ajax',
          cors: true,
          useDefaultXhrHeader: false,
          withCredentials: true,

          success: function() {
            Ext.ComponentQuery.query('tasksListView')[0].store.load();
          },

          failure: function(er) {
            Ext.ComponentQuery.query('tasksListView')[0].store.load();
          },
        });
      },
    },

    {
      xtype: 'button',
      iconCls: "x-fa fa-edit",
      text: 'Edit This',
      ui: 'action',

      handler: function () {
        // var id = (((Ext.ComponentQuery.query('tasksListView')[0].getSelected().items[0]) || {}).data || {}).id || 0;
        //
        // if (!id) {
        //   Ext.ComponentQuery.query('tasksListView')[0].store.load();


          Ext.create('Ext.window.Window', {
            title: 'Create New Task',
            height: 800,
            width: 1000,
            layout: 'fit',
            items: [
              {xtype: 'formTaskView', reference: 'formTaskView'},
            ],


            proxy: {
              type: 'ajax',
              useDefaultXhrHeader: false,
              method: 'POST',
              url: 'http://localhost:8080/tasksa/',
            },

            bbar: {
              xtype: 'toolbar',
              docked: 'bottom',
              items: [
                {
                  xtype: 'button',
                  text: 'Close',
                  docked: 'left',
                  ui: 'normal',
                  handler: function () {
                    this.up('window').close();
                  }
                },
                {
                  xtype: 'button',
                  text: 'Save',
                  docked: 'right',
                  ui: 'confirm',

                  handler: function () {
                    Ext.ComponentQuery.query('formTaskView')[0].submit({
                      type: 'ajax',
                      useDefaultXhrHeader: false,
                      method: 'POST',

                      success: function () {
                        Ext.ComponentQuery.query('tasksListView')[0].store.load();
                        this.up('window').close();
                      },

                      failure: function (er) {
                        Ext.ComponentQuery.query('tasksListView')[0].store.load();
                        this.up('window').close();
                      },
                    });


                  }
                }
              ]
            },
          }).show();
        // }
      }
    }
  ]
});