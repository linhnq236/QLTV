$( document ).on('turbolinks:load', function() {
  $('#dataTableBorrow, #dataTableHistory, #dataTableUser').DataTable();
  $('.dataTables_length').addClass('bs-select');
});
