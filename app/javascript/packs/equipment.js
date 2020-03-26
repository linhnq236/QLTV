// $(document).ready(function(){
//   // var myVar = setInterval(myTimer, 1000);
//   var my = setInterval(autoload, 1000);
//
//   function autoload(){
//     $.each(gon.equipment, function( index, value ) {
//       turnoff(value["timer"], value["timeout"], value["id"]);
//     });
//   }
//
//   function turnoff(timer, timeout, id){
//     var d = new Date();
//     var day = Date.parse(d);
//     var timer = Date.parse(timer);
//     var timeout = Date.parse(timeout);
//     if(day == timer){
//       autoRequestTurnOn(id);
//     }
//     if(day == timeout){
//       autoRequestTurnOff(id);
//     }
//
//   }
//
//   $('.timer,.timeout').css('cursor', 'pointer');
//   $('.turn').click(function(){
//     var id = $(this).data("id");
//     var active = $(this).text();
//     if (active == "On"){
//       dataEquipment = {
//         equipment:{
//           active: false
//         }
//       }
//     }else{
//       dataEquipment = {
//         equipment:{
//           active: true
//         }
//       }
//     }
//     $.ajax({
//         type: 'PATCH',
//         url: "/equipment/"+id,
//         data: dataEquipment,
//         success: function(repsonse) {
//           if (active == "On"){
//             console.log("Turn off is successfully.")
//           }else{
//             console.log("Turn on is successfully.")
//           }
//         },
//         error: function(repsonse) {
//           console.log("Turn on is fails.")
//         }
//     })
//
//   })
//   $('.timer').click(function(){
//     var id = $(this).data("id");
//     var content = '';
//     if (id == 1){
//       content = "Đèn 13";
//     }else if (id == 2){
//       content = "Đèn 14";
//     }else{
//       content = "Đèn 15";
//     }
//     $.confirm({
//     title: content,
//     columnClass: 'col-md-5 col-md-offset-4',
//     content: '' +
//     "<form action='' class='formName'>" +
//     '<div class="form-group">' +
//     '<input type="datetime-local" class="timer form-control" required />' +
//     '</div>' +
//     '</form>',
//     buttons: {
//         formSubmit: {
//           text: 'Submit',
//           btnClass: 'btn-blue',
//           action: function () {
//           var timer = this.$content.find('.timer').val();
//           $.ajax({
//               type: 'PATCH',
//               url: "/equipment/"+id,
//               data: {
//                 equipment:{
//                   timer: timer
//                 }
//               },
//               success: function(repsonse) {
//                 console.log("Set timer is successfully.")
//               },
//               error: function(repsonse) {
//                 console.log("Set timer on is fails.")
//               }
//             })
//           }
//         },
//         cancel: function () {
//             //close
//         },
//     },
//     onContentReady: function () {
//         // bind to events
//         var jc = this;
//         this.$content.find('form').on('submit', function (e) {
//             // if the user submits the form by pressing enter in the field.
//             e.preventDefault();
//             jc.$$formSubmit.trigger('click'); // reference the button and click it
//         });
//       }
//     });
//   })
//   $('.timeout').click(function(){
//     var id = $(this).data("id");
//     var content = '';
//     if (id == 1){
//       content = "Đèn 13";
//     }else if (id == 2){
//       content = "Đèn 14";
//     }else{
//       content = "Đèn 15";
//     }
//     $.confirm({
//     title: content,
//     columnClass: 'col-md-5 col-md-offset-4',
//     content: '' +
//     "<form action='' class='formName'>" +
//     '<div class="form-group">' +
//     '<input type="datetime-local" class="timeout form-control" required />' +
//     '</div>' +
//     '</form>',
//     buttons: {
//         formSubmit: {
//           text: 'Submit',
//           btnClass: 'btn-blue',
//           action: function () {
//           var timeout = this.$content.find('.timeout').val();
//           $.ajax({
//               type: 'PATCH',
//               url: "/equipment/"+id,
//               data: {
//                 equipment:{
//                   timeout: timeout
//                 }
//               },
//               success: function(repsonse) {
//                 console.log("Set timer is successfully.")
//               },
//               error: function(repsonse) {
//                 console.log("Set timer on is fails.")
//               }
//             })
//           }
//         },
//         cancel: function () {
//             //close
//         },
//     },
//     onContentReady: function () {
//         // bind to events
//         var jc = this;
//         this.$content.find('form').on('submit', function (e) {
//             // if the user submits the form by pressing enter in the field.
//             e.preventDefault();
//             jc.$$formSubmit.trigger('click'); // reference the button and click it
//         });
//       }
//     });
//   })
//
//   function autoRequestTurnOff(id){
//     dataEquipment = {
//       equipment:{
//         active: false,
//         // timeout: '00:00:0000 00:00'
//       }
//     };
//     $.ajax({
//         type: 'PATCH',
//         url: "/equipment/"+ id,
//         data: dataEquipment,
//         success: function(repsonse) {
//             console.log("Turn off is successfully.")
//         },
//         error: function(repsonse) {
//           console.log("Turn off is fails.")
//         }
//     })
//   }
//   function autoRequestTurnOn(id){
//     dataEquipment = {
//       equipment:{
//         active: true,
//         // timer: '00:00:0000 00:00'
//       }
//     };
//     $.ajax({
//         type: 'PATCH',
//         url: "/equipment/"+ id,
//         data: dataEquipment,
//         success: function(repsonse) {
//             console.log("Turn off is successfully.")
//         },
//         error: function(repsonse) {
//           console.log("Turn off is fails.")
//         }
//     })
//   }
// });
