class SessionsController < ApplicationController
  def new
  end

  def create
  	user = User.find_by(username: params[:username])
  	if user.password == params[:password]
  	  session[:user_id] = user.id
  	  render json: {
  	  	status: 200,
  	  	user_id: user.id,
  	  	}.to_json
  	  
  	end
  end

  def destroy
  end

  def session_params
  	params.permit(:username, :password)
  end

end
