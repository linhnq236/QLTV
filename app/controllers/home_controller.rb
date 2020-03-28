class HomeController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :check_equipment , only: [:index, :introduce]

  def index
  end
  def introduce
  end
end
