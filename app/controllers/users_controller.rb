class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @users = User.order("code DESC").where(admin: 0)
  end
  def new

  end
  def edit
    @user = User.where(:id=>current_user.id)
  end
  def active_acc
    id= params[:id]
    user = User.find(id.to_i)
    if params[:disable] == 1
      mes = I18n.t("user.active");
    else
      mes = I18n.t("user.block");
    end
    if user.update(disable: params[:disable])
      render json: {notice: I18n.t("user.acc_mess_succ", mes: "#{mes}")}
    end
  end
  def update
      a = User.where(:id=>current_user.id).update(:name=>params['name'])
       flash[:notice] = "You have successfully edit."
      redirect_to "/books"
  end
  def profile
    @profile = User.joins(:department).select("users.*, departments.*").where(:id => current_user.id)
  end
end
