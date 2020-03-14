$( document ).on('turbolinks:load', function() {
  $(".disable").click(function(){
    var id = $(this).data("id");
    var active = $(this).data("active");
    if(active == 0){
      dataActive = {
        id: id,
        disable: ""
      }
    }else{
      dataActive = {
        id: id,
        disable: 1
      }
    }

    $.ajax({
      type: "PUT",
      url : "/active_acc",
      data: dataActive,
      success: function(repsonse){
        $.alert({
          title: false,
          content: repsonse["notice"],
          buttons: {
            OK: function(){
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
