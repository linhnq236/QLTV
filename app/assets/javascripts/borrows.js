$( document ).on('turbolinks:load', function() {
  // count notices
  $(".borrow_notice").text(gon.notices.length);
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
    console.log(dataPayBook);
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
  // $(".select_code").mouseover(function(){
  //     result = $(this).data("id");
  //     // $(this).children("option:selected").hide();
  //     $(`.bookid${result} option`).each(function(index, value){
  //       a = $(this).data("bookid");
  //       if(result != a){
  //         $(`.bookid${result} .option${a}`).hide();
  //       }
  //     })
  //   })
  // $(".select_code").mouseout(function(){
  //   result = $(this).data("id");
  //   // $(this).children("option:selected").hide();
  //   $(`.bookid${result} option`).each(function(index, value){
  //     a = $(this).data("bookid");
  //     if(result != a){
  //       $(`.bookid${result} .option${a}`).show();
  //     }
  //   })
  // })
  var val_amount = 0;
  $("select.select_code").change(function(){
     result = $(this).data("id");
     val_amount = $(this).children("option:selected").val();
     var id = $(this).find(':selected').attr('data-bookid');
     yesdis = $(`.disbook${id}`).attr('data-bookid');
     if (id == yesdis) {
       $(`.disbook${id}`).removeAttr("disabled");
     }else{
       $(`.dis`).attr("disabled", "disabled");
     }
   });
  // $( ".select_code" )
  // .change(function () {
  //   code = $( `.select_code option:selected` ).val();
  //   bookid = $(this).find(':selected').attr('data-bookid');
  //   console.log(code);
  //   if (code!=0){
  //     $(`.bookid${bookid}`).attr("disabled", "disabled");
  //     yesdis = $(`.disbook${bookid}`).data("bookid");
  //     if (bookid == yesdis) {
  //       $(`.disbook${bookid}`).removeAttr("disabled");
  //     }else{
  //       $(`.dis`).attr("disabled", "disabled");
  //     }
  //   }
  // })
  // .change();
  $(".yes").click(function(){
    var bookid = $(this).data("bookid");
    var userid = $(this).data("userid");
    $(`.bookid${bookid}`).attr("disabled", "disabled");
    dataUpdate = {
      amount_id: val_amount,
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
// notice accept borrow
  $(".borr_notice").each(function(){
    userid = $(this).data("userid");
    getNotice(userid);
  })
  var a = [];
  $(".borr_notice").each(function(){
    userid = $(this).data("userid");
    a.push(userid);
  })
  $.ajax({
    type: 'POST',
    url: "/api/sum_notices",
    data: {userid:a},
    success: function(repsonse) {
      if(repsonse["data"].length == 0){
        return false;
      }
      reducer = (accumulator, currentValue) => accumulator + currentValue;
      a = repsonse["data"].reduce(reducer);
      $(".borrow_notice").text(a);
    },
    error:function(repsonse){
      console.log(repsonse["data"]);
    }
  })
  function getNotice(userid){
    $.ajax({
      type: 'POST',
      url: "/api/notices",
      data: {userid:userid},
      success: function(repsonse) {
        $(`.notice${userid}`).text(repsonse["data"]);
        $(`.borr_notice${userid}`).attr("data-notice",repsonse["data"]);
      },
      error:function(repsonse){
        console.log(repsonse["data"]);
      }
    })
  }
})
