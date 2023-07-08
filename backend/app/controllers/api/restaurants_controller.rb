class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.all
      
        render json: @restaurants
    end

    def show
        # debugger
        @restaurant = Restaurant.includes(:reviews).find(params[:id])
        render :show
        # @restaurant = Restaurant.find(params[:id])

        # render :show
    end

    private

    def restaurant _params
        params.require(:restaurant).permit(:name, :description, :longitude, :latitude, :neighborhood, :cuisines, :dress_code, :parking_details, :executive_chef, :additional, :created_at, :updated_at, :opentime, :closetime, :delivery, :price_range)
    end
    
end