class Api::RestaurantsController < ApplicationController

    def index
        @reviews = Review.all
      
        render json: @reviews
    end

    def show
        # debugger
        @review = Review.find(params[:id])

        render :show
    end

    

    private

    def review_params
        params.require(:review).permit(:body, :overall, :food, :service, :ambience, :value)
    end
end