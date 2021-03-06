$( document ).on('turbolinks:load', function() {
  $(".cart_size").text(localStorage.number);
  var path = $(location).attr('pathname');
  var result = '';
  if (path.substr(1,2) == "en") {
    result = "/en";
  }else{
    result = "/vn";
  }
  $(".btn-borrow>.detail").removeAttr("href");
  $(".btn-borrow>.hidden").remove();
  var bookids=[];
  var ids = [];
  var list_bookid;
  $(".bor").click(function(){
    var borrow = $(this);
    if(bookids.length >= 4){
      $.alert("Thêm đủ số lượng sách.");
      return false;
    }
    bookids.push(borrow.data("id"));
    list_bookid = deduplicate(bookids);
    var number = list_bookid.length;
    console.log(number);
    if (typeof(Storage) !== "undefined") {
      // localStorage.setItem("bookids",JSON.stringify(list_bookid));
      localStorage.setItem("bookids",list_bookid);
      localStorage.setItem("number",list_bookid.length);

    }
    $(".cart_size").text(localStorage.number);
    $.alert("Thêm thành công.");
  })
  function deduplicate(arr) {
  let isExist = (arr, x) => arr.indexOf(x) > -1;
  let ans = [];
  arr.forEach(element => {
    if(!isExist(ans, element)) ans.push(element);
  });
    return ans;
  }
  $(".bor_send").click(function(){
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
      $(".amount_code").append(`<input name='amount_code' placeholder='Nhập mã sách' class='input_amount form-control'>`);
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
  $(".new_book_button_down").click(function(){
    $(".new_book").removeClass("d-none");
    $(".new_book_button_up").removeClass("d-none")
    $(".new_book_button_down").addClass("d-none")
  })
  $(".new_book_button_up").click(function(){
    $(".new_book").addClass("d-none");
    $(".new_book_button_up").addClass("d-none")
    $(".new_book_button_down").removeClass("d-none")
  })
  $('.dropdown>li').click(function(){
    if($(this).hasClass('active')){
      $(this).children('.subiteam').slideUp();
      $(this).removeClass('active');
    }else{
      $(this).children('.subiteam').slideDown();
      //this laf ther dc chn menu>li
      //chuwa active hien thi slide dow xuongs tuc con
      $(this).addClass('active');//danh dau da active
        }
    });
  // show vào giỏ hàng
  $('.cart').click(function(){
    call_cart();
  })
  // filler books
  // $("#input_book").on("keyup", function() {
  //   var value = $(this).val().toLowerCase();
  //   $(".row .col-sm-3 .col-product").filter(function() {
  //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  //   });
  // });
  // size = localStorage.bookids.replace(",", "");
  // $(".cart_size").html(size.length);

  // loc sach co ten theo chữ cái
  for (var i = 65; i <= 90; i++) {
    char = String.fromCharCode(i);
    $(".show_character").append(`<a class="p-1 text-center" href="${result}/books?char=${char}">${char}</a>`);
  }
  $(".show_character").mouseout(function(){
    $(this).css({"color":"blue"})
  })

  // Get data để show ra giỏ hàng
  function call_cart(){
    $.ajax({
      type: "POST",
      url : "/api/cart",
      data:{
        bookids: localStorage.bookids,
      },
      success: function(repsonse){
        var html = '';
        var html_err = '';
        $.each(repsonse['data'], function( index, value ) {
          $.each(value, function(index1, value1){
            html += `
              <div class="col-sm-4 cart_image">
                <input type="checkbox" value="${value1["id"]}" class="float-left item cart_align">
                ${value1["image"]}
              </div>
              <div class="col-sm-4">
                <div class="cart_align">${value1["name"]}</div>
              </div>
              <div class="col-sm-4">
                <div class="cart_align">${value1["author_name"]}</div>
              </div>
            `
          })
        })
        $.confirm({
          columnClass: 'col-md-10',
          closeIcon: true,
          closeIconClass: 'fa fa-close',
          title: I18n.t("layout.cart_tv"),
          content:
          `<form action="" class="formName col-md-12">
            <div class="row text-center">
              <div class="col-sm-4">Hình ảnh</div>
              <div class="col-sm-4">Tên sách</div>
              <div class="col-sm-4">Tác giả</div>
            </div>
            <div class="row text-center">
              ${html}
            </div>
          </form>`,
          buttons: {
              Hủy:{
                btnClass: 'btn-secondary cancel float-right',
              },
              formSubmit: {
                text: 'Gửi',
                btnClass: 'btn-primary submit float-right',
                action: function () {
                  dataBorrow = {
                    bookids: localStorage.bookids
                  };
                  $.ajax({
                      type: 'POST',
                      url: "/api/borrows",
                      data: dataBorrow,
                      success: function(repsonse) {
                        localStorage.clear();
                        $.ajax({
                          type: "POST",
                          url : "/api/cart_errors",
                          data:{
                              bookids: repsonse["data"].join(","),
                          },
                          success: function(repsonse){
                            if(repsonse["data"].length == 0){
                              $.alert({
                                title: false,
                                content: "Gủi thành công",
                              });
                              return false;
                            }
                            $.each(repsonse['data'], function( index, value ) {
                              $.each(value, function(index1, value1){
                                html_err += `<div>Sách ${value1["name"]} của tác giả ${value1["author_name"]} đã được mược hoặc đã hết số lượng.</div>`
                              })
                            })
                            $.alert({
                              title: false,
                              content: `${html_err}`,
                            });
                          }
                        })

                      },
                      error: function(repsonse) {
                        console.log(repsonse);
                      }
                  })
                }
              },
              Xóa: {
                btnClass: 'btn-danger delete float-left',
                action: function(){
                  var idItems = [];
                  var idItem = this.$content.find('.item:checked').val();
                  $.each($(".item:checked"), function(){
                      idItems.push($(this).val());
                  });
                  if(!idItem){
                      $.alert('Chua chon san pham');
                      return false;
                  }
                // removeItems = idItems.join(",");
                $.each(idItems, function(index, value){
                  var result = localStorage.bookids.split(",");
                  $.each(result, function(index1, value1){
                    if(value == value1){
                      var i = result.indexOf(`${value1}`);
                      if (i != -1) {
                          result.splice(i,1);
                      }
                    }
                  })
                  idItems = result.join(",");
                  localStorage.setItem("number",result.length);
                  localStorage.setItem("bookids",idItems);
                  // localStorage.setItem("number",localStorage.bookids.length);
                })
                $(".cart_size").text(localStorage.number);

                call_cart();
              }
            },
            Xóa_hết:{
                btnClass: 'btn-danger delete float-left',
                action: function(){
                  localStorage.clear();
                  location.reload();
              }
            }
          },
        })
      },
      error: function(repsonse){
        console.log(repsonse);
      }
    })
  }
  // add book
  $(".addbook").click(function(){
    var book_id = $(this).data("book_id");
    var book_code =  $(this).data("book_code");
    $.confirm({
      columnClass: 'col-md-10',
      closeIcon: true,
      closeIconClass: 'fa fa-close',
      title: I18n.t("layout.add"),
      content:
      `<form action="" class="formName col-md-12">
        <input value="${book_code}" disabled>
        <input type="number" class="amount" placeholder="Nhập số lượng sách thêm">
      </form>`,
      buttons: {
        formSubmit: {
          text: 'Gửi',
          btnClass: 'btn-primary submit float-right',
          action: function () {
            var amount = this.$content.find('.amount').val();
            if(!amount){
                $.alert('Không được để trống hoặc phải nhập số!');
                return false;
            }
            var dataBook = {
              amount: amount,
              book_id: book_id,
              book_code: book_code
            };
            console.log(dataBook);
            $.ajax({
              type: "POST",
              url: "/api/addbook",
              data: dataBook,
              success: function(repsonse){
                $.alert(repsonse["notice"]);
                location.reload();
              },
              error: function(repsonse){
                console.log(repsonse);
              }
            })
          }
        }
      }
    })
  })
  // delete book
})
