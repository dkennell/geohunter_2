import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'
import { Link } from 'react-router-dom'

class UsersTile extends React.Component{
  render(){

  return(
    <div className="users_tile">
	    <h1>Users</h1>
	  </div>
	)
  }
}


export default UsersTile