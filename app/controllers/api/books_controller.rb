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

    def addbook
      amount = params[:amount]
      book_id = params[:book_id]
      book_code = params[:book_code]
      book = Book.find(book_id)
      book.update(amount: (book.amount + amount.to_i))
      am_book = Amount.where(book_id: book_id.to_i)
      start = am_book.size + 1
      finish= am_book.size + amount.to_i
      for i in start..finish
        Amount.new(code:"#{book_code}#{i}", book_id: book_id, active: 0).save
      end
      render json:{notice: t("mes.success")}
    end
  end
end
