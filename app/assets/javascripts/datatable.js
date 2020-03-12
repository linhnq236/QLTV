$( document ).on('turbolinks:load', function() {
  $('#dataTableBorrow, #dataTableHistory').DataTable();
  $('.dataTables_length').addClass('bs-select');
});
