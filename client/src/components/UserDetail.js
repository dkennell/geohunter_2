import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'
import { connect } from 'react-redux'

class UserDetail extends Component {

  render(){
    console.log("Props! ", this.props)
    if (this.props.user){
    return (
      <div>
      <Panel>
        <h1>{this.props.user.username}</h1>
        <p>Gender: {this.props.user.gender}</p>
        <p>Hometown: {this.props.user.hometown}</p>
        <p>Occupation: {this.props.user.occupation}</p>
        <p>Description: {this.props.user.description}</p>
      </Panel>
      </div>
    ); 
 } else { return null }
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id
  let user = state.users.find((user) => {return user.id === id})
  return {
    user: user
  }
}

export default connect(mapStateToProps)(UserDetail)