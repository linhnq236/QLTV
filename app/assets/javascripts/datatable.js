$( document ).on('turbolinks:load', function() {
  $('#dataTableBorrow, #dataTableHistory, #dataTableUser,#dataTableBook').DataTable();
  $('.dataTables_length').addClass('bs-select');
});
