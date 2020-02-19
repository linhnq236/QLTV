class EquipmentController < ApplicationController
  before_action :check_admin, only: [:index, :show, :edit, :update, :destroy, :new]
  before_action :set_equipment, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /equipment
  # GET /equipment.json
  # dino_blink = require "dino_blink"

  def index

    current_time = Time.now.strftime("%Y-%m-%d %H:%M")
    current_time_to_i = convert_string_to_int(current_time)
    @equipment = Equipment.all
    gon.equipment = Equipment.all
    board = Dino::Board.new(Dino::TxRx.new)
    led = Dino::Components::Led.new(pin: 13, board: board)
    led1 = Dino::Components::Led.new(pin: 14, board: board)
    led2 = Dino::Components::Led.new(pin: 15, board: board)

    @equipment.each do |q|

    if q.active == true
      case q.id
        when 1
          blink(led,1)
          if convert_string_to_int(q.timer) == current_time_to_i
            blink(led,4)
          else
          end
        when 2
          blink(led1,1)
        when 3
          blink(led2,1)
        end
      end
    end
  end

  # GET /equipment/1
  # GET /equipment/1.json
  def show
  end

  # GET /equipment/new
  def new
    @equipment = Equipment.new

  end

  # GET /equipment/1/edit
  def edit
  end

  # POST /equipment
  # POST /equipment.json
  def create
    @equipment = Equipment.new(equipment_params)

    respond_to do |format|
      if @equipment.save
        format.html { redirect_to @equipment, notice: 'Equipment was successfully created.' }
        format.json { render :show, status: :created, location: @equipment }
      else
        format.html { render :new }
        format.json { render json: @equipment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /equipment/1
  # PATCH/PUT /equipment/1.json
  def update
    respond_to do |format|
      if @equipment.update(equipment_params)
        format.html { redirect_to controller_equipment_path, notice: 'Equipment was successfully updated.' }
        format.json { render :show, status: :ok, location: @equipment }
      else
        format.html { render :edit }
        format.json { render json: @equipment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /equipment/1
  # DELETE /equipment/1.json
  def destroy
    @equipment.destroy
    respond_to do |format|
      format.html { redirect_to equipment_index_url, notice: 'Equipment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_equipment
      @equipment = Equipment.find(params[:id])
    end
    def check_admin
      # if current_user.admin == 1
      # elsif current_user.admin == 0
      #   redirect_to root_path
      # else
      #   redirect_to root_path
      # end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def equipment_params
      params.require(:equipment).permit(:equiqment_name, :active, :timer, :timeout)
    end
    def convert_string_to_int datetime
      return datetime.to_i
    end
end
