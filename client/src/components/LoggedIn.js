import React from 'react'
import { connect } from 'react-redux'
import { destroySession } from '../actions/sessionActions'

class LoggedIn extends React.Component {
  render(){  

	const destroySession = () => {
		// Dispatch an action that destroys the session
	}

	  return(
		<div>
		  <span>Logged In User: {this.props.username}  </span>
		  <button onClick={this.props.destroySession}>Log Out</button>
		</div>
	  )
	}
}

  const mapStateToProps = (state) => {
    return { 
      currentUser: state.currentUser
    }
  }

  const mapDispatchToProps = () => {
    return { 
      destroySession
    }	
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn)