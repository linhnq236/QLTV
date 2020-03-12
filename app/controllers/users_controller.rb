class UsersController < ApplicationController

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
