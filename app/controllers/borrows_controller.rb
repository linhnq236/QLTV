class BorrowsController < ApplicationController
  before_action :set_borrow, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token
  before_action :check_staff, only: [:index]
  before_action :check_equipment , only: [:index]

  # GET /borrows
  # GET /borrows.json
  def index
    @borrows = Borrow.order(:user_id).select("distinct(user_id)")
    if params[:id].present?
      @books = Borrow.where(user_id: params[:id])
      @amounts = Amount.all
    end
  end

  # GET /borrows/1
  # GET /borrows/1.json
  def show
  end

  # GET /borrows/new
  def new
    @borrow = Borrow.new
  end

  # GET /borrows/1/edit
  def edit
  end

  # POST /borrows
  # POST /borrows.json
  def create
    getName = Book.where(id:getId["book_id"].to_i)
    getCount = Borrow.where(user_id:current_user.id).pluck(:user_id).size
    if Borrow.where(book_id: getId["book_id"].to_i, user_id: current_user.id).exists?
      getName.each do |getname|
        render json: {notice: t("borrow.exists", name: "#{getname.name}")}
      end
    else
      if getCount > 5
        render json: {notice: t("borrow.over")}
      else
        if check_exists_book(getId["book_id"].to_i) == true
          render json:{notice: "Sach da het so luong"}
        else
          @borrow = Borrow.new(borrow_params.merge(user_id: current_user.id, allow: false))
          getName.each do |getname|
            # respond_to do |format|
            if @borrow.save
              render json: {notice: t("borrow.success", name: "#{getname.name}")}
              # format.html { redirect_to "/books", notice: t("borrow.success", name: getname.name)}
            else
              render json: {notice: t("borrow.fail", name: "#{getname.name}")}
              # format.html { redirect_to "/books", notice: t("borrow.fail", name: getname.name)}
            end
            # end
          end
        end
      end
    end
  end

  def accept_borrow
    book_id = params[:book_id]
    user_id = params[:user_id]
    amount_id = params[:amount_id]
    borrow = Borrow.where(book_id: book_id, user_id: user_id)
    amount = Amount.find(amount_id)
    if borrow.update(allow: 1, staff_id_borrow: current_user.id)
      if amount.update(active: 1, user_id: user_id)
        render json:{notice: "OK"}
      else
        render json:{notice: "Fails"}
      end
    end
  end
  def pay_book
    book_id = params[:book_id]
    borrow_id = params[:borrow_id]
    amount_id = params[:amount_id]
    create_historys(current_user.id,borrow_id.to_i,amount_id.to_i)

  end
  # DELETE /borrows/1
  # DELETE /borrows/1.json
  def destroy
    @borrow.destroy
    respond_to do |format|
      format.html { redirect_to borrows_url, notice: 'Borrow was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def mybook
    @borrowbooks = Borrow.where(user_id:current_user.id).order("created_at DESC")
    @amounts = Amount.all
    @histories = History.where(user_id:current_user.id).order("created_at DESC")
    @users = User.all
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_borrow
      @borrow = Borrow.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def borrow_params
      params.require(:borrow).permit(:note, :user_id, :book_id)
    end
    def getId
      params.require(:borrow).permit(:book_id, :department_id)
    end
    def check_exists_book id
      amount = Book.find(id).amount
      if Borrow.where(book_id: id).pluck(:id).size >= amount
        return true
      end
    end
    def create_historys staff_id_pay,borrow_id,amount_id
      borrow = Borrow.where(id: borrow_id)
      borrow.each do |bor|
        his = History.new(staff_id_pay: staff_id_pay, amount_id: amount_id,  user_id: bor.user_id, borrow_time: bor.updated_at, pay_time: DateTime.current, book_id: bor.book_id, staff_id_borrow: bor.staff_id_borrow)
        his.save
      end
      Borrow.delete(borrow_id)
      amount = Amount.find(amount_id)
      if amount.update(active: 0, user_id: "")
        render json:{notice: "Tra sach thanh cong"}
      end
    end
end
