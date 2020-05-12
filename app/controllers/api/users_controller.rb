module Api
  class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    def setpassword
      user = User.find(params[:id])
      if user.update(password: "123456")
        render json: {notice: "Khôi phục lại mật khẩu"}
      else
        render json: {notice: "Lỗi"}
      end
    end
  end
end
