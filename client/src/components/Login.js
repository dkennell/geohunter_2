import React from 'react'

const Login = () => {
		return(
			<div>
			  <h1>Login</h1>
			  <form>
			    <label for="username">Username </label><br/>
			    <input type="text" id="username"/><br/>
			    <label for="password">Password </label><br/>
			    <input type="password" id="password"/><br/>
			    <input type="submit" value="Login"/>
			  </form>
			</div>
			)
}

// oh shit i'm gonna need sessions

export default Login