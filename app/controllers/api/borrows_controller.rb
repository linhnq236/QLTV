module Api
  class BorrowsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      bookids = params[:bookids]
      array_errors = []
      bookids.split(",").each do |id|
        if Borrow.where(book_id: id, user_id: current_user.id).exists?
          array_errors.push(id)
        else
          amount = Book.find(id).amount
          if Borrow.where(book_id: id).pluck(:id).size >= amount
            array_errors.push(id)
          else
            @borrow = Borrow.new(book_id: id, user_id: current_user.id, allow: 0).save
          end
        end
      end
      render json: {data: array_errors}
    end
    def notices
      userid = params[:userid]
      borrow = Borrow.select(:id).where(user_id: userid, allow:0)
      render json:{data: borrow.size}
    end
    def sum_notices
      result = []
      if !params[:userid].nil?
        params[:userid].each do |userid|
          borrow = Borrow.select(:id).where(user_id: userid, allow:0)
          result.push(borrow.size)
        end
        render json:{data: result}
      else
        render json:{data: result}
      end
    end
  end
end
