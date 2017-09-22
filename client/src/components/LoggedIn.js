import React from 'react'
import { connect } from 'react-redux'
import { destroySession } from '../actions/sessionActions'

class LoggedIn extends React.Component {

  destroySession = () => {
    this.props.destroySession()
  }

    render(){  
    if (this.props.currentUser.id){
	    return(
		  <div>
		    <span>Logged In User: <strong>{this.props.currentUser.username}</strong> </span>
		    <button onClick={this.props.destroySession}>Log Out</button>
		  </div>
	    ) 
    } else {
      return(
        <p></p>
        )
    }
	}
}

  const mapStateToProps = (state) => {
    return { 
      currentUser: state.users.currentUser
    }
  }

  const mapDispatchToProps = (dispatch) => ({ 
      destroySession: () => {
        dispatch({type: "LOGOUT_USER"})
      }
  })

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn)