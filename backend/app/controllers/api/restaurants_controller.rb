class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.all
      
        render json: @restaurants
    end

    def show
        # debugger
        @restaurant = Restaurant.find(params[:id])

        render :show
    end
end