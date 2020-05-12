class HistoriesController < ApplicationController
  before_action :check_staff, only: [:index]
  before_action :check_student, only: [:historystudent]
  before_action :check_equipment , only: [:index]

  def index
    @histories = History.order("created_at DESC")
  end

  def historystudent
    @histories = History.order("created_at DESC").where(user_id: current_user.id)
  end
end
