module Api
  class BooksController < ApplicationController
    skip_before_action :verify_authenticity_token
    def cart
      books = []
      str = params[:bookids]
      if str.nil?
        render json:{data: 0, stauts: 204}
      else
        arr_bookids = str.split(',')
        arr_bookids.each do |id|
          book = Book.joins(:author).where(id:id).select("books.*,authors.name as author_name")
          books.push(book)
        end
        render json:{data:books, status: 200}
      end
    end

    def cart_errors
      books = []
      str = params[:bookids]
      if str.nil?
        render json:{data: 0, stauts: 204}
      else
        arr_bookids = str.split(',')
        arr_bookids.each do |id|
          book = Book.joins(:author).where(id:id).select("books.name,authors.name as author_name")
          books.push(book)
        end
        render json:{data:books, status: 200}
      end
    end

    def search_book
      @search = params[:search]
      @books = Book.search(@search).order("created_at DESC")
      render json: {data: @books}
    end
  end
end
