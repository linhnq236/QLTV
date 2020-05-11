module Api
  class MessagesController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
      messages = Message.joins(:user).select("messages.*,users.name")
      render json: {data: messages}
    end
    def create
      @message = Message.new(content: params[:message],user_id: current_user.id)
      if @message.save
        ActionCable.server.broadcast 'room_channel',
        message: @message.content,
        user: current_user.name
        # head :ok
        head :no_content
      end
    end
  end
end
