class Api::ReservsController < ApplicationController
    before_action :require_logged_in

    def index
      @reservs = Reserv.all
    end
  
    def show
      @reserv = Reserv.find(params[:id])
    end
  
    def create
      @reserv = Reserv.new(reserv_params)
  
      if @reserv.save!
        render :show
      else
        render json: reserv.errors.full_messages, status: 422
      end
    end
  
    def update
      @reserv = Reserv.find(params[:id])
  
      if @reserv.update(reserv_params)
        render :show
      else
        render json: @reserv.errors.full_messages, status: 422
      end
    end
  
    def destroy
      @reserv = Reserv.find(params[:id])
  
      if !@reserv.destroy
        render json: @reserv.errors.full_messages, status: 422
      end
    end
  
    private
    
    def reserv_params
      params.require(:reserv).permit(:rname, :restaurant_id, :user_id, :phone_number, :first_name, :occasion, :special_request, :party_size, :date, :time)
    end
end
