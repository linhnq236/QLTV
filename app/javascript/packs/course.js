$(document).ready(function(){
  $("#course").click(function(){
    location.reload();
    console.log("a");
  })
  $(".reg").click(function(){
    var $button_reg = $(this);

    $usercourseData = {
      usercourse:{
        course_id: $button_reg.data("id"),
      }
    }
    $.ajax({
       type: 'POST',
       url: "/usercourses",
       data: $usercourseData,
       success: function(repsonse) {
         alert("Register is suscessfully !");
       },
       error: function(repsonse) {
         alert("This course is full or registed !");
     }
   })
 });


});
