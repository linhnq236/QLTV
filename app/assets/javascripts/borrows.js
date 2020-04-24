$( document ).on('turbolinks:load', function() {
  check= $(".select_code option:selected" ).val();
  if (check!=0) {
    $(".select_code").attr("disabled","disabled");
  }
  // pay book
  $(".pay").click(function(){
    var bookid = $(this).data("bookid");
    var borrowid = $(this).data("borrowid");
    var amountid = $(".select_code option:selected" ).val();
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
  $( ".select_code" )
  .change(function () {
    code = $( ".select_code option:selected" ).val();
    if (code!=0){
      $(".dis").removeAttr("disabled");
    }
    else{
      $(".dis").attr("disabled","disabled");
    }

  })
  .change();
  $(".yes").click(function(){
    var bookid = $(this).data("bookid");
    var userid = $(this).data("userid");
    dataUpdate = {
      amount_id: code,
      book_id: bookid,
      user_id: userid,
    }
    console.log(dataUpdate);
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
