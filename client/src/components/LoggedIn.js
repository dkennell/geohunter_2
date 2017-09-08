import React from 'react'

class LoggedIn extends React.Component {
  constructor(props){
  	super(props)
  	this.state = {
  		username: " (Not Logged In) "
  	}
  }
  render(){
  
  const checkSession = () => {
    fetch('http://localhost:3001/sessions')
	  .then((response) => response.json())
	  .then((info) => {
	   let username = ""
	   if (info !== undefined) {username = info.username}
	   setUsername(username)
	   })
	}

	const setUsername = (username) => {
		this.setState({
			username: username
		})
	}

	const destroySession = () => {
		fetch('http://localhost:3001/sessions/1')
		.then((reponse) => window.location.reload())
	}


	checkSession()

	  return(
		<div>
		  <span>Logged In User: {this.state.username}  </span>
		  <button onClick={destroySession}>Log Out</button>
		</div>
	  )
	}
}



export default LoggedIn