$( document ).on('turbolinks:load', function() {
  $('#dataTableBorrow, #dataTableHistory, #dataTableUser,#dataTableBook,#dataTableProcess').DataTable();
  $('.dataTables_length').addClass('bs-select');
});
