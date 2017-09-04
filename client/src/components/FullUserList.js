import React from 'react'
import User from './User'

const UserList = (props) => {
  return(
  	<div>
  	  <p>Userlist:</p>
  	  {renderUsers(props.users)}
   	</div>
  	)
}

const renderUsers = (users) => {
	return users.map((user, index) => {
		return(
			<User key={index} info={user}/>
			)
	})
}

export default UserList