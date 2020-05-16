$( document ).on('turbolinks:load', function() {
  App.room = App.cable.subscriptions.create('RoomChannel', {
    received: function(data) {
      $("#messages").removeClass('hidden');
      $(".alert_notice").append('<small><i class="fa fa-bell text-danger"></i></small>');
      return $('#messages').append(this.renderMessage(data));
    },

    renderMessage: function(data) {
      return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
    }
  });
})
