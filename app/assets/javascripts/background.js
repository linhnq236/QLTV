$( document ).on('turbolinks:load', function() {
  pathname = $(location).attr('pathname');
  // console.log(pathname);
  if(pathname == "/" || pathname == "/vn"|| pathname == "/en" || pathname == "/introduce" || pathname == "/vn/introduce" || pathname == "/en/introduce" || pathname == "/vn/users/sign_in" || pathname == "/en/users/sign_in" ){

  }else{
    $(".nav_header").css({"background":"#122d48"})
    $("#menu ul li a ").css({"color":"white"})
    $("#menu ul li a ").mouseover(function(){
      $(this).css({"color":"blue"})
    })
    $("#menu ul li a ").mouseout(function(){
      $(this).css({"color":"white"})
    })
    $("#text").css({"color":"white"})
  }
  // var width = $(window).width();
  // console.log(width);
  $(".bar_menu").click(function(){
    $(".app_navigation").animate({'width': 'toggle'});
  })
})
