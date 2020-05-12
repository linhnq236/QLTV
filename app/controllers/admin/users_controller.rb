module Admin
  class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    DEFAULT_PER_PER = 14
    def index
      @per_page = params[:per_page] || DEFAULT_PER_PER
      if params[:user].present?
        if  params[:user].to_i != 3
          @users = User.where(admin: params[:user]).order("id ASC").paginate(page: params[:page], per_page: @per_page)
        else
          @users = User.all.order("admin DESC").paginate(page: params[:page], per_page: @per_page)
        end
      else
        @users = User.all.order("admin DESC").paginate(page: params[:page], per_page: @per_page)
      end
    end

    def create
      if User.where(email: params[:email]).exists?
        email = params[:email]
        flash[:notice] = I18n.t("user.acc_exists", email: "#{email.to_s}")
        redirect_to "/admin/users"
      else
        user = User.create(email: params[:email], password: "123456", admin: params[:admin])
        if user.save
          flash[:notice] = t("mes.success")
          redirect_to "/admin/users"
        else
          flash[:notice] = t("mes.fail")
          redirect_to "/admin/users"
        end
      end
    end
    def update
      user = User.find(params[:id])
      active = params[:active]
      if active.to_i == 1
        if user.update(password: "123456")
          flash[:notice] = t("mes.success_update")
          redirect_to "/admin/users"
        else
          flash[:notice] = t("mes.fail_update")
          byebug
          redirect_to "/admin/users"
        end
      elsif active.to_i == 2
        block = params[:dis]
        if user.update(disable: block.to_i)
          flash[:notice] = t("mes.success_update")
          redirect_to "/admin/users"
        else
          flash[:notice] = t("mes.fail_update")
          redirect_to "/admin/users"
        end
      else
        if user.delete
          flash[:notice] = t("mes.delete_success")
          redirect_to "/admin/users"
        else
          flash[:notice] = t("mes.delete_fail")
          redirect_to "/admin/users"
        end
      end
    end
  end
end
