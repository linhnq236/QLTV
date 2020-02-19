module Api
  class EquipmentController < ApplicationController
    skip_before_action :verify_authenticity_token

    dino_blink = require "dino_blink"

    def index
      equipments = Equipment.all
      if equipments.present?
        render json:equipments
      else
        render json:{data: equipments.errors}, status: :unprocessable_entity
      end
    end

    def show
      equipment = Equipment.where(id:params[:id])
      if equipment.present?
        render json:equipment
      else
        render json:{data: equipment.errors}, status: :unprocessable_entity
      end
    end

    def update
      equipment = Equipment.where(id:params[:id])
      if equipment.update(active: params[:active])
        render json:{status: 200}
      else
        render json:{status: 500}
      end
    end
  end
end
