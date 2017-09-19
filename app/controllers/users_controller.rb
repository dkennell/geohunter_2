class UsersController < ApplicationController

	def create
	    @user = User.create(username: params[:username],
	    					password: params[:password],
	    					gender: params[:gender],
	    					hometown: params[:hometown],
	    					occupation: params[:occupation],
	    					description: params[:description],
	    					image_path: params[:image_path]
	    			)
	    binding.pry
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

end
