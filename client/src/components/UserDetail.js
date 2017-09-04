import React, { Component } from 'react';

class UserDetail extends Component {
    render(){
    	const id = this.props.match.params.id
    	const user = getUser(id)
    	debugger;
        return (
        	<div>
        	  <h1>{user.id}</h1>
        	  <h1>{user.username}</h1>
        	</div>
        );
    }
}

const getUser = (id) => {
    return fetch('http://localhost:3001/users/' + id)
      .then((result) => result.json())
      .then((userJson) => userJson)
}

export default UserDetail