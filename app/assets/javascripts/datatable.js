$( document ).on('turbolinks:load', function() {
  var path = $(location).attr('pathname');
  var result = '';
  if (path.substr(1,2) == "en") {
    result = "English";
  }else{
    result = "Vietnamese";
  }
  $('#dataTableBorrow, #dataTableHistory, #dataTableUser,#dataTableBook,#dataTableProcess, .table_historyall').DataTable({
    "language": {
           "url": `//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/${result}.json`
       }
  });
  $('.dataTables_length').addClass('bs-select');
});
