$( document ).on('turbolinks:load', function() {
  $(".submit").click(function(){
    var mes = $.trim($(".mes").val());
    if(mes == ""){
      return false;
    }
    $.ajax({
      type: "POST",
      url: "/api/messages",
      data: {
        message: mes
      },
      success: function(reponsive){
        $(".mes").val("");
      },
      error: function(reponsive){

      }
    })
  })
})
