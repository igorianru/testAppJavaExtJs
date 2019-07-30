Ext.define('MyExtGenApp.view.tasks.TasksView', {
  extend: 'Ext.Container',
  xtype: 'tasks',
  cls: 'tasks',
  // requires: [
  //   'Ext.layout.Fit'
  // ],
  // layout: 'card',

  items: [
    {xtype: 'barview', reference: 'barview'},
    {xtype: 'tasksListView',  height: '100%'},
  ],
  // layout: 'fit',
  //
  // controller: {type: 'tasksController'},
  // viewModel: {type: 'tasksModel'},
  // store: {type: 'tasksStore'},
  // columns: [
  //   {
  //     text: 'ID',
  //     dataIndex: 'id',
  //     width: 50,
  //     cell: {userCls: 'bold'},
  //   },
  //
  //   {
  //     text: 'Number',
  //     dataIndex: 'number',
  //     width: 100,
  //     cell: {userCls: 'bold'},
  //   },
  //
  //   {
  //     text: 'Name',
  //     dataIndex: 'name',
  //     width: 100,
  //     cell: {userCls: 'bold'},
  //   },
  //
  //   {
  //     text: 'From',
  //     tpl: '{from.lastName} {from.firstName}',
  //     width: 200,
  //     cell: {userCls: 'bold'},
  //   },
  //
  //   {
  //     text: 'To',
  //     width: 200,
  //     cell: {userCls: 'bold'},
  //     tpl: '{to.lastName} {to.firstName}'
  //   },
  //
  //   {
  //     text: 'Status',
  //     // dataIndex: 'to.firstName',
  //     width: 100,
  //     cell: {userCls: 'bold'},
  //
  //     // xtype:'templatecolumn',
  //     tpl: '{status.name}'
  //   },
  //
  //   // {header: "Name", width: 60, sortable: true, renderer: templateRenderer(new Ext.Template('{to.firstName}, {to.lastName}')) },
  // ],
  //
  // listeners: {
  //   select: 'onItemSelected'
  // }
});

// function templateRenderer(template) {
// 	return function(value, meta, record, rowIndex, colIndex, store) {
//
// 		console.log(value, meta, record)
// 		return template.applyTemplate(record.data);
// 	};
// }
//
// //
// // function templateRenderer(template) {
// // 	return function(value, meta, record, rowIndex, colIndex, store) {
// //
// // 		console.log(value, meta, record, rowIndex, colIndex, store)
// // 		return meta.data.to.firstName;
// // 	};
// // }
// //
// // // http://localhost:1962/#personnelview
// // // https://docs.sencha.com/extjs/6.7.0/modern/Ext.grid.Grid.html
// // // https://docs.sencha.com/extjs/6.7.0/classic/Ext.data.Store.html