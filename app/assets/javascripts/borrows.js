$( document ).on('turbolinks:load', function() {
  $(".code").click(function(){
    var amountid = $(this).val();
    $(".dis").removeAttr("disabled")
    $(".yes").click(function(){
      var bookid = $(this).data("bookid");
      var userid = $(this).data("userid");
      dataUpdate = {
        amount_id: amountid,
        book_id: bookid,
        user_id: userid,
      }
      $.ajax({
        type: 'PUT',
        url: "/accept_borrow",
        data: dataUpdate,
        success: function(repsonse) {
          $.alert({
            title: false,
            content: repsonse["notice"],
            buttons: {
              confirm: function(){
                location.reload();
              }
            }
          });
        },
        error: function(repsonse) {
          console.log(repsonse);
        }
      })
    })
  })
  // pay book
  $(".pay").click(function(){
    var bookid = $(this).data("bookid");
    var borrowid = $(this).data("borrowid");
    var amountid = $(this).data("amountid");
    dataPayBook = {
      book_id: bookid,
      amount_id: amountid,
      borrow_id: borrowid,
    }
    $.ajax({
      type: "put",
      url: "/pay_book",
      data: dataPayBook,
      success: function(repsonse){
        $.alert({
          title: false,
          content: repsonse["notice"],
          buttons: {
            confirm: function(){
              location.reload();
            }
          }
        });
      },
      error: function(repsonse){
        console.log(repsonse);
      }
    })
  })
})
