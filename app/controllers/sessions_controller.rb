class SessionsController < ApplicationController
  def show
    Session.delete_all
    render json:{
      status: 200,
      message: 'session destroyed'
    }
  end

  def index
  	user = User.find(Session.all[0].user_id)
  	render json: {
  		status: 200,
  		id: user.id,
  		username: user.username
  	}.to_json
  end

  def create
  	user = User.find_by(username: params[:username])
  	if user.password == params[:password]
  	  session = Session.create(user_id: user.id)
  	  render json: {
  	  	status: 200,
  	  	user_id: user.id
  	  	}.to_json
  	  
  	end
  end

  def destroy
  end

  def session_params
  	params.permit(:username, :password)
  end

end
