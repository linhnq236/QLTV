$( document ).on('turbolinks:load', function() {
  $('#dataTableBorrow, #dataTableHistory, #dataTableUser,#dataTableBook,#dataTableProcess, .table_historyall').DataTable({
    "language": {
           "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Vietnamese.json"
       }
  });
  $('.dataTables_length').addClass('bs-select');
});
