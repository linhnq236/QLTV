$( document ).on('turbolinks:load', function() {
  $(".btn-borrow>.detail").removeAttr("href");
  $(".btn-borrow>.hidden").remove();
  $(".bor").click(function(){
    var borrow = $(this);
    dataBorrow = {
      borrow:{
        book_id: borrow.data("id")
      }
    };
    $.ajax({
        type: 'POST',
        url: "/borrows",
        data: dataBorrow,
        success: function(repsonse) {
          $.alert({
            title: false,
            content: repsonse["notice"],
          });
        },
        error: function(repsonse) {
          console.log(repsonse);
        }
    })
  })
  $("#book_amount").keyup(function(){
    var amount = this.value;
    if (amount > 0){
      console.log(amount);
      for(i = 0; i < amount; i++){
        $(".amount_code").append(`<input name='amount_code[]' placeholder='Nhập mã sách ${i + 1}' class='input_amount form-control'>`);
      }
    }else{
        $(".input_amount").remove();
    }
  });
  // New author
  $(".new_author").click(function(){
    $.confirm({
      title: I18n.t("book.new_author"),
      content: '' +
      '<form action="" class="formName">' +
      '<div class="form-group">' +
      '<input type="text" placeholder="Tên tác giả" class="name form-control" required />' +
      '<input type="text" placeholder="Link tác giả" class="website form-control" required />' +
      '</div>' +
      '</form>',
      buttons: {
          formSubmit: {
              text: 'GỬI',
              btnClass: 'btn-blue',
              action: function () {
                var name = this.$content.find('.name').val();
                var website = this.$content.find('.website').val();
                if(!name || !website){
                    $.alert('provide a valid name or website');
                    return false;
                }
                $.ajax({
                  type: "POST",
                  url : "/authors",
                  data:{
                    author:{
                      name: name,
                      website: website
                    }
                  },
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
              }
          },
          Thoát: {
            btnClass: 'btn-danger',
          },
      },
    });
  })
  // new type
  $(".new_type").click(function(){
    // console.log(gon.departments);
    var html = '';
    $.each(gon.departments, function(index, value){
      html += `<option class="form-control" value="${index + 1}"> ${value.name} </option>`
    }) ;
    $.confirm({
      title: I18n.t("book.new_type"),
      content:
      `<form action="" class="formName">
      <div class="form-group">
        <input type="text" placeholder="Thể loại mới" class="name form-control" required />
      </div>
      <select class="select_department form-control">
        ${html}
      </select>
      </form>`,
      buttons: {
          formSubmit: {
              text: 'GỬI',
              btnClass: 'btn-blue',
              action: function () {
                  var name = this.$content.find('.name').val();
                  var department_id = this.$content.find('.select_department').val();
                  if(!name || !department_id){
                      $.alert('Không được để trống !');
                      return false;
                  }
                  console.log(department_id);
                  $.ajax({
                    type: "POST",
                    url : "/types",
                    data:{
                      type:{
                        name: name,
                        department_id: department_id
                      }
                    },
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
              }
          },
          Hủy: {
            btnClass: 'btn-danger',
          },
      },
    });
  })
  // new publisher
  $(".new_publisher").click(function(){
    $.confirm({
      title: I18n.t("book.new_publisher"),
      content: '' +
      '<form action="" class="formName">' +
      '<div class="form-group">' +
      '<input type="text" placeholder="Tên nhà xuất bản" class="name form-control" required />' +
      '<input type="text" placeholder="Địa chỉ" class="add form-control" required />' +
      '<input type="email" placeholder="Email" class="email form-control" required />' +
      '</div>' +
      '</form>',
      buttons: {
          formSubmit: {
              text: 'GỬI',
              btnClass: 'btn-blue',
              action: function () {
                var name = this.$content.find('.name').val();
                var add = this.$content.find('.add').val();
                var email = this.$content.find('.email').val();
                if(!name || !add || !email){
                    $.alert('Không được để trống !');
                    return false;
                }
                $.ajax({
                  type: "POST",
                  url : "/publishers",
                  data:{
                    publisher:{
                      name: name,
                      address: add,
                      email: email
                    }
                  },
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
              }
          },
          Hủy: {
            btnClass: 'btn-danger',
          },
      },
    });
  })
})
