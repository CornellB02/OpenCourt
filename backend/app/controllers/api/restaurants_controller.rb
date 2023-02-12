class RestaurantsController < ApplicationController
    def index
    @restaurants = Restaurant.all
      
    render :index
end

def show
    @restaurants = Restaurant.find(params[:id])

    render :show
  end