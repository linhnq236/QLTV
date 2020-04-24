module Api
  class BooksController < ApplicationController
    skip_before_action :verify_authenticity_token
    def cart
      books = []
      str = params[:bookids]
      arr_bookids = str.split(',')
      arr_bookids.each do |id|
        book = Book.joins(:author).where(id:id).select("books.*,authors.name as author_name")
        books.push(book)
      end
      render json:{data:books}
    end
  end
end
