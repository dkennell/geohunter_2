import React from 'react'

class Signup extends React.Component{
  render() {
	return(
		<div>
		  <h1>New User Signup</h1>
		  <form id="newUserForm" onSubmit={(event) => createUser(event)}>
		    <label htmlFor="username">Username: </label>
		    <input type="text" id="username" name="username"/><br/>
		    <label htmlFor="password">password: </label>
		    <input type="text" id="password" name="password"/><br/>
		    <label htmlFor="gender">gender: </label>
		    <input type="text" id="gender" name="gender"/><br/>
		    <label htmlFor="hometown">hometown: </label>
		    <input type="text" id="hometown" name="hometown"/><br/>
		    <label htmlFor="occupation">occupation: </label>
		    <input type="text" id="occupation" name="occupation"/><br/>
		    <label htmlFor="description">description: </label>
		    <input type="text" id="description" name="description"></input><br/>
		    <input type="submit"/>
		  </form>
		</div>
		)
}
}

const createUser = (event) => {
  event.preventDefault()
  fetch('http://localhost:3001/users',
  	{
  	  method: 'post',
  	  body: new FormData(document.getElementById("newUserForm"))  	  
  	})
      .then((response) => response.json())
      .then((user_info) => handleLogin(user_info)) 
      .catch((error) => {console.log("Error in the Post User fetch: ", error)})	
}

const handleLogin = (user_info) => {
	debugger;
  let id = user_info.user_id
  this.props.history.push('/users/' + id)
}

export default Signup

