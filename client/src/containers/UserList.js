import React from 'react'
import User from '../components/User'
import { connect } from 'react-redux'

class UserList extends React.Component{
  render(){

    const renderUsers = (users) => {
      return users.map((user, index) => {
        return(
          <User key={index} info={user}/>
        )
      })
    }

    return(
  	  <div>
  	    <h1>Userlist:</h1>
  	    {renderUsers(this.props.users)}
  	  </div>
  	)
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {setName: (name) => {
           console.log("in apps dispatch")
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
