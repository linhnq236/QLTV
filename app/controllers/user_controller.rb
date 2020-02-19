class UserController < ApplicationController

  def edit
    @user = User.where(:id=>current_user.id)
    @department = Department.all
  end
  def update
      a = User.where(:id=>current_user.id).update(:name=>params['name'], :department_id=>params['department_id'])
       flash[:notice] = "You have successfully edit."
      redirect_to edit_user_path
  end
  def profile
    @profile = User.joins(:department).select("users.*, departments.*").where(:id => current_user.id)
  end
end
