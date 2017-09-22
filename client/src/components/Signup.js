import React from 'react'
import { connect } from 'react-redux'
 
class Signup extends React.Component{
  	constructor(props){
		super(props)
}  

  createUser = (event) => {
    event.preventDefault()
    debugger;
    let formDetails = {user: {username: document.getElementById("username").value,
								password: document.getElementById("password").value,
								gender: document.getElementById("gender").value,
								hometown: document.getElementById("hometown").value,
								occupation: document.getElementById("occupation").value,
								description: document.getElementById("description").value}
						}
								debugger;
    this.props.dispatchSignup(formDetails)
  }

  render() {
	return(
		<div>
		  <h1>New User Signup</h1>
		  <form id="newUserForm" onSubmit={(event) => this.createUser(event)}>
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

const mapStateToProps = () => {
 return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	dispatchSignup: function(formData){
  	  debugger;
  	  var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      fetch('http://localhost:3001/users',
        {
      	  headers: myHeaders,
          method: 'post',
          mode: 'cors',
          cache: 'default',
          body: JSON.stringify(formData)      
        }
      )
        .then((response) => response.json())
        .then((user_info) => { dispatch({
          type: "CREATE_NEW_USER",
          payload: user_info
        })
        ownProps.history.push('/users/' + user_info.id)
        })
  	}}
  }


export default connect(mapStateToProps, mapDispatchToProps)(Signup)

