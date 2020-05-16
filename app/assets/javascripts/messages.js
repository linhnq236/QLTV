$( document ).on('turbolinks:load', function() {
  function scroll_mes(){
    var myscroll = $("#messages");
    myscroll.scrollTop(myscroll.get(0).scrollHeight);
  }
  var html = '';
  $.ajax({
    type: "GET",
    url: "/api/messages",
    success: function(reponsive){
      $.each(reponsive["data"], function(index,value){
        html += `<p><b>${value["name"]}</b>: ${value["content"]}</p>`
      })
      $("#messages").html(html);
    },
    error: function(reponsive){
      console.log(reponsive["data"]);
    }
  })
  $(".chatmes").click(function(){
    $(".form_chat").show();
    $(".chatmes").hide();
    $(".alert_notice").hide();
    scroll_mes();
  })
  $(".close").click(function(){
    $(".form_chat").hide();
    $(".chatmes").show();
  })
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
