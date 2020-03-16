$( document ).on('turbolinks:load', function() {
  function alertMess(mess){
    $.alert({
      title: false,
      content: mess,
      buttons: {
        OK: function(){
          location.reload();
        }
      }
    });
  }
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
        alertMess(repsonse["notice"])
      },
      error: function(repsonse){
        console.log(repsonse);
      }
    })
  })
  // $(".input_acc").keyup(function(){
  //   var acc = $(this).val();
  //   if(acc != ''){
  //     for(i = 0; i < acc; i++){
  //       $(".add_acc").append(`
  //         <div class='row'>
  //           <div class='col-sm-3'>
  //             <input type='email' name='email[]' class='form-control form-new-acc email' placeholder='Email tài khoản thứ ${i + 1}'></input>
  //             <div class='error'></div>
  //           </div>
  //         </div>
  //         `);
  //     }

    // }else{
    //   $(".form-new-acc").remove();
    // }
  // })
  // Gui data create user -> /users
  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
  }
  $(".form_submit_acc").click(function(){
    var email = $(".email").val();
    var dataEmail = [];
    $(".email").each(function(index){
      if (validateEmail($(this).val()) == true){
        dataAcc = {
          user:{
            email: $(this).val()
          }
        };
        $.ajax({
          type: "POST",
          url : "/users",
          data: dataAcc,
          success: function(repsonse){
            alertMess(repsonse["notice"])
          },
          error: function(repsonse) {
            alertMess(repsonse["notice"])
          }
        })
      }else{
        $(".err").append("Email is not available<br>");
      }
    })
  })
})
