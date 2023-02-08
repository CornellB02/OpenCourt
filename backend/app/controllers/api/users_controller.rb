class Api::UsersController < ApplicationController
    before_action :require_logged_out, only: [:create]
    
    # def create
    #     @user = User.new(user_params)

    #     if @user.save
    #         login(@user)
    #         render :show
    #     else
    #         render json: @user.errors.full_messages, status: 422
    #     end
    # end

    def create
        # {credential: "username@gmail.com", :password=>"password" }
          @user = User.new(user_params)

        debugger
    
        if @user.save
          login(@user)
          render :show
        else
          render json: @user.errors.full_messages, status: 422
        end
      end
    

    wrap_parameters include: User.attribute_names 

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
