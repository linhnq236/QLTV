module Api
  class BorrowsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      bookids = params[:bookids]
      array_errors = []
      bookids.split(",").each do |id|
        if Borrow.where(book_id: id, user_id: current_user.id).exists?
          # || check_amount_book(id) == true
          array_errors.push(id)
        else
          @borrow = Borrow.new(book_id: id, user_id: current_user.id, allow: 0).save
        end
      end
      render json: {data: array_errors}
    end
  end

  def check_amount_book id
    amount = Book.find(id).amount
    if Borrow.where(book_id: id).pluck(:id).size >= amount
      return true
    end
  end
end
