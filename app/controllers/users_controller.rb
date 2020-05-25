class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :check_equipment , only: [:index]

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
    if params[:disable] == "1"
      mes = I18n.t("user.block");
    else
      mes = I18n.t("user.active");
    end
    if user.update(disable: params[:disable])
      render json: {notice: I18n.t("user.acc_mess_succ", mes: "#{mes}")}
    end
  end
  def update
      a = User.where(:id=>current_user.id).update(:name=>params['name'],:code=>params['code'],:tel=>params['tel'],:add=>params['add'],password: params['password'])
       flash[:notice] = I18n.t('mes.success_update')
      redirect_to "/books"
  end
  def create
    if User.where(email_params).exists?
      redirect_to "/users", notice:I18n.t('mes.exists')
    else
      user = User.create(user_params.merge(password: "123456", password_confirmation: "123456"))
      if user.save
        redirect_to "/users", notice:I18n.t('mes.success')
      else
        redirect_to "/users", notice:I18n.t('mes.fail')
      end
    end
  end
  def profile
    @profile = User.joins(:department).select("users.*, departments.*").where(:id => current_user.id)
  end
  def listalluser
    @users = User.all
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
  def email_params
    params.require(:user).permit(:email)
  end
end
