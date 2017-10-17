import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'
import { Link } from 'react-router-dom'

class Login extends React.Component{
	constructor(props){
		super(props)
    this.state = {
      failureMessage: "",
      formDetails: {}
    }
	}

  checkUser = () => {
    let formUsername = document.getElementById("username").value
    let formPassword = document.getElementById("password").value
    let matchingUsers = this.props.users.filter((user) => {return user.username == formUsername && user.password == formPassword})
    if (matchingUsers.length == 1){
      this.props.dispatchLogin(matchingUsers[0].id)
    } else {
      this.setState({
        failureMessage: "Invalid Login"
      })
    }
  }

  render(){

  return(
    <div className="login">
	  <h1>Login</h1>
	  <form id="login-form" onSubmit={(event) => {event.preventDefault(); this.checkUser()}}>
	    <label htmlFor="username">Username </label><br/>
	    <input type="text" id="username" name="username"/><br/>
	    <label htmlFor="password">Password </label><br/>
	    <input type="password" id="password" name="password"/><br/>
	    <input type="submit" value="Login"/>
	  </form>
    <p>{this.state.failureMessage}</p>
    <Link to="/signup">Sign Up</Link>
	</div>
	)
}
}

const mapStateToProps = (state) => {
  return {
    users: state.users.allUsers,
    currentUser: state.users.currentUser
  }

}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin(userId){
    dispatch({
      type: "SET_CURRENT_USER",
      payload: userId
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)