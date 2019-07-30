Ext.define('MyExtGenApp.view.tasks.list.TasksView', {
  extend: 'Ext.grid.Grid',
  xtype: 'tasksListView',
  cls: 'tasksListView',
  requires: [
    'Ext.grid.Row'
  ],
  controller: {type: 'tasksListViewController'},
  viewModel: {type: 'tasksListViewModel'},
  store: {type: 'tasksListViewStore'},
  columns: [
    {
      text: 'ID',
      dataIndex: 'id',
      width: 50,
      cell: {userCls: 'bold'},
    },

    {
      text: 'Number',
      dataIndex: 'number',
      width: 100,
      cell: {userCls: 'bold'},
    },

    {
      text: 'Name',
      dataIndex: 'name',
      width: 100,
      cell: {userCls: 'bold'},
    },

    {
      text: 'From',
      tpl: '{from.firstName} {from.lastName}',
      width: 200,
      cell: {userCls: 'bold'},
    },

    {
      text: 'To',
      width: 200,
      cell: {userCls: 'bold'},
      tpl: '{to.firstName} {to.lastName}'
    },

    {
      text: 'Status',
      // dataIndex: 'to.firstName',
      width: 100,
      cell: {userCls: 'bold'},
      tpl: '{status.name}'
    },

    // {header: "Name", width: 60, sortable: true, renderer: templateRenderer(new Ext.Template('{to.firstName}, {to.lastName}')) },
  ],

  listeners: {
    select: function (el) {
      if(!Ext.ComponentQuery.query('detailview')[0]._width)
        Ext.query('*[id^=handlerTop]')[0].click();

      var
        data = (((Ext.ComponentQuery.query('tasksListView')[0].getSelected().items[0]) || {}).data || {});


      Ext.query('*[id^=detailViewContainer]')[0].innerHTML = `<div style="font-size: 14px; color: #272727; border: solid 1px #e7e7e7; padding: 5px">
        <div style="text-align: center"><h2>${data.name}</h2></div>
        <p>
        <b>ID</b>
          <h4 style="font-weight: normal">${data.id}</h4>
        </p>
        <p>
        <b>Number</b>
         <h4 style="font-weight: normal">${data.number}</h6>
        </p>
        <p>
        <b>Name</b>
          <h4 style="font-weight: normal">${data.name}</h6>
        </p>
        <p>
        <b>From</b>
          <h4 style="font-weight: normal">${data.from.firstName} ${data.from.lastName}</h6>
        </p>
        <p>
        <b>To</b>
          <h4 style="font-weight: normal">${data.to.firstName} ${data.to.lastName}</h6>
        </p>
        <p>
        <b>Status</b>
         <h4 style="font-weight: normal">${data.status.name}</h6>
        </p>
      </div>`;

      // Ext.Action.onHeaderViewDetailToggle()



    }
  }
});

// Ext.test = function() {
//   console.log('click el')
// }