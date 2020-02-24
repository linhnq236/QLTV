class HistoryallsController < ApplicationController
  before_action :set_historyall, only: [:show, :edit, :update, :destroy]

  # GET /historyalls
  # GET /historyalls.json
  def index
    @historyalls = Historyall.all
  end

  # GET /historyalls/1
  # GET /historyalls/1.json
  def show
  end

  # GET /historyalls/new
  def new
    @historyall = Historyall.new
  end

  # GET /historyalls/1/edit
  def edit
  end

  # POST /historyalls
  # POST /historyalls.json
  def create
    @historyall = Historyall.new(historyall_params)

    respond_to do |format|
      if @historyall.save
        format.html { redirect_to @historyall, notice: 'Historyall was successfully created.' }
        format.json { render :show, status: :created, location: @historyall }
      else
        format.html { render :new }
        format.json { render json: @historyall.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /historyalls/1
  # PATCH/PUT /historyalls/1.json
  def update
    respond_to do |format|
      if @historyall.update(historyall_params)
        format.html { redirect_to @historyall, notice: 'Historyall was successfully updated.' }
        format.json { render :show, status: :ok, location: @historyall }
      else
        format.html { render :edit }
        format.json { render json: @historyall.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /historyalls/1
  # DELETE /historyalls/1.json
  def destroy
    @historyall.destroy
    respond_to do |format|
      format.html { redirect_to historyalls_url, notice: 'Historyall was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_historyall
      @historyall = Historyall.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def historyall_params
      params.require(:historyall).permit(:active, :value_old, :value_new, :staff_id)
    end
end
