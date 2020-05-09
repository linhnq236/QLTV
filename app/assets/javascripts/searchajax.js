$(document).on('turbolinks:load',function(){
  setInterval(set_heigth, 10);
  function set_heigth(){
    var result_search = $(".result_search").text();
    if(result_search == ""){
      $(".result_search").removeClass("h-25");
    }
  }
  $(".input_search").keyup(function(){
    keyword = $(this).val();
    if (keyword == ''){
      $(".result_search").html("");
      return false;
    }
    $.ajax({
      type: "POST",
      url: "/api/search_book",
      data: {
        search: keyword
      },
      success: function(reponsive){
        var html = '';
        $.each(reponsive["data"], function(index,value){
          html += `<li class="list-group-item list-group-item-action"><a class="nav-link" href="/book_detail_student/${value["id"]}">${value["name"]}</a></li>`;
        })
        $(".result_search").addClass("h-25");
        $(".result_search").html(`<ul class="list-group result_search">${html}</ul>`);
      },
      error: function(reponsive){
        console.log(reponsive);
      }
    })

  })
})
