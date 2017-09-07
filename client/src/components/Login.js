import React from 'react'

class Login extends React.Component{
	constructor(props){
		super(props)
	}
  render(){
  const postSession = (event) => {
    event.preventDefault()
    fetch('http://localhost:3001/sessions', 
      {
  	    header: {
  		  'Accept': 'application/json',
  		  'Content-Type': 'application/json'
  	  },
  	  method: 'post',
  	  body: new FormData(document.getElementById("login-form"))
      }
    )
      .then((response) => response.json())
      .then((user_info) => handleLogin(user_info)) 
      .catch((error) => {console.log("Error in the Post Session fetch: ", error)})	
  }

  const handleLogin = (user_info) => {
    let id = user_info.user_id
    this.props.history.push('/users/' + id)
  }

  return(
    <div>
	  <h1>Login</h1>
	  <form id="login-form" onSubmit={(event) => postSession(event)}>
	    <label htmlFor="username">Username </label><br/>
	    <input type="text" id="username" name="username"/><br/>
	    <label htmlFor="password">Password </label><br/>
	    <input type="password" id="password" name="password"/><br/>
	    <input type="submit" value="Login"/>
	  </form>
	</div>
	)
}

}
export default Login