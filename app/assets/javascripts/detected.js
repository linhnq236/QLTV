$( document ).on('turbolinks:load', function() {
  setInterval(detectedface, 1000);

  $("#turncamera").click(function(){
    configure();
    $("#capture").show();
  });
  $("#capture").click(function(){
    capture_webcam();
  });
  $("#take").click(function(){
    var picture = savePic();

  })

  function turn_led_on(id){
    dataEquipment = {
      equipment:{
        active: true
      }
    }
    $.ajax({
        type: 'PATCH',
        url: "/equipment/"+id,
        data: dataEquipment,
        success: function(repsonse) {
          location.reload();
        },
        error: function(repsonse) {
          console.log("Turn on is fails.")
        }
    })
  }
  function turn_led_off(id){
    dataEquipment = {
      equipment:{
        active: false
      }
    }
    $.ajax({
        type: 'PATCH',
        url: "/equipment/"+id,
        data: dataEquipment,
        success: function(repsonse) {
          console.log("turn off");
          location.reload();
        },
        error: function(repsonse) {
          console.log("Turn on is fails.")
        }
    })
  }

  // webcame
  function configure(){
   Webcam.set({
    width: 350,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
   });
   Webcam.attach( '#my_camera' );
  }
  function capture_webcam() {

   Webcam.snap( function(data_uri) {
   // display results in page
   $("#results").html('<img id="imageprev" class="pic" src="'+data_uri+'"/>');
   } );
  }

 function savePic(){

  // var base64image = document.getElementById("imageprev").src;
  var base64image = $("#imageprev").attr("src");

  return base64image;
 }

 function detectedface(){
   $(".pic").faceDetection({
     complete:function(faces){
       // turn_led_13(1);
       if(faces.length > 0){
         for(var i=0;i<faces.length;i++){
           $('<div>',{
             'class':'face',
             'css':{
               'position':'absolute',
               'left':faces[i].x*faces[i].scaleX+'px',
               'top':faces[i].y*faces[i].scaleY+'px',
               'width':faces[i].width*faces[i].scaleX+'px',
               'height':faces[i].height*faces[i].scaleY+'px'
             }
           })
           .insertAfter(this);
         }
         console.log("on");
         setTimeout(turn_led_on(1), 3000)
         return;
       }else{
         setTimeout(turn_led_off(1), 3000)
         return;
       }
     },
     error:function(code,message){
       console.log("a");
       alert("Error: "+message);
     }
   });
 }
 function tam(){
   // $("#detect").click(function(){
   //   $(".pic").faceDetection({
   //     complete:function(faces){
   //       // turn_led_13(1);
   //       if(faces.length > 0){
   //         for(var i=0;i<faces.length;i++){
   //           turn_led_on(i+1);
   //           $('<div>',{
   //             'class':'face',
   //             'css':{
   //               'position':'absolute',
   //               'left':faces[i].x*faces[i].scaleX+'px',
   //               'top':faces[i].y*faces[i].scaleY+'px',
   //               'width':faces[i].width*faces[i].scaleX+'px',
   //               'height':faces[i].height*faces[i].scaleY+'px'
   //             }
   //           })
   //           .insertAfter(this);
   //         }
   //       }else{
   //         turn_led_off(1)
   //       }
   //     },
   //     error:function(code,message){
   //       console.log("a");
   //       alert("Error: "+message);
   //     }
   //   });
   // });
 }
})
