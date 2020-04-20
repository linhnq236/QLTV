class BooksController < ApplicationController
  before_action :set_book, only: [:show_book_detail, :edit, :update, :destroy]
  before_action :profile_user , only: [:index]
  before_action :check_student , only: [:index]
  before_action :check_active , only: [:index]
  before_action :check_staff , only: [:new, :create, :destroy, :update, :book_detail]
  # before_action :check_equipment
  PER_PAGE = 12
  # GET /books
  # GET /books.json
  def index
    if params[:search].present?
      @search = params[:search];
      @books = Book.search(@search).order("created_at DESC").paginate(page: params[:page], per_page: PER_PAGE)
    else
      @books = Book.all.paginate(page: params[:page], per_page: PER_PAGE)
    end
    @types = Type.all
    @authors = Author.all
    @publishers = Publisher.all
    @departments = Department.all
  end

  # GET /books/1
  # GET /books/1.json
  def show
    @books = Book.where(type_id: params[:id]).order("created_at DESC").paginate(page: params[:page], per_page: PER_PAGE)
    @types = Type.all
    @authors = Author.all
    @publishers = Publisher.all
    @departments = Department.all
  end

  def show_book
    @book = Book.find(params[:id]).order("created_at DESC").paginate(page: params[:page], per_page: PER_PAGE)
  end

  def show_book_detail
    @book = Book.find(params[:id])
    @types = Type.all
    @authors = Author.all
    @publishers = Publisher.all
    @departments = Department.all
  end
  def book_detail
    @book = Book.find(params[:id])
  end

  # GET /books/new
  def new
    @books = Book.all
    @book = Book.new
    @types = Type.all
    @authors = Author.all
    @publishers = Publisher.all
    gon.departments = Department.all
  end

  # GET /books/1/edit
  def edit
    @types = Type.all
    @authors = Author.all
    @publishers = Publisher.all
  end

  # POST /books
  # POST /books.json
  def create
    @book = Book.new(book_params)
    respond_to do |format|
      if @book.save
        format.html { redirect_to "/books/new", notice: 'Book was successfully created.' }
        format.json { render :show, status: :created, location: @book }
      else
        format.html { render :new }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
    getBookId = Book.where(name:@book.name)
    getBookId.each do |id_book|
      # params[:amount].each do |value|

      amount_code = params[:amount_code]
      amount = @book[:amount]
      for i in 1..amount
        rd = rand(100...999)
        Amount.new(code:"#{amount_code}#{rd}", book_id: id_book.id, active: 0).save
      end
    end
  end

  # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
    respond_to do |format|
      if @book.update(book_params)
        format.html { redirect_to @book, notice: 'Book was successfully updated.' }
        format.json { render :show, status: :ok, location: @book }
      else
        format.html { render :edit }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book.destroy
    respond_to do |format|
      format.html { redirect_to new_book_path, notice: 'Book was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def book_params
      params.require(:book).permit(:name, :publishyear, :author_id, :type_id, :publisher_id, :image,:amount,)
    end
end
