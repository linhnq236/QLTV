class HomeController < ApplicationController
  skip_before_action :authenticate_user!
  # before_action :check_equipment, only: [:index, :introduce]
  PER_PAGE = 6
  def index
    @current_date = Time.zone.now.to_date
    @books = Book.group(:type_id).paginate(page: params[:page], per_page: PER_PAGE)
  end
  def introduce
  end

end
