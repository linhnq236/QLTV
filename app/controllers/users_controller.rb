class UsersController < ApplicationController
  def index
    @users = User.order("code DESC")
  end
  def new

  end
  def edit
    @user = User.where(:id=>current_user.id)
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
