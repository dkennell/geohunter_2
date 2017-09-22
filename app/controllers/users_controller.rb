class UsersController < ApplicationController

	def create
	    @user = User.create(user_params)
  	    render json: @user.to_json()
	end

	def index
		@users = User.all
		render json: @users.to_json()
	end

	def show
		@user = User.find(params[:id])
		render json: @user.to_json()
	end

	def user_params
		params.require(:user).permit(:username, :password, :gender, :hometown, :occupation, :description)
	end
end
