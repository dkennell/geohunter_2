import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'

class UserDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
  const id = this.props.match.params.id
    fetch('http://localhost:3001/users/' + id)
      .then((result) => result.json())
      .then((user) => this.setState({user}))
      .catch((error) => console.log("Error in the fetch: ", error))
  }

  render(){
    return (
      <div>
      <Panel>
        <h1>{this.state.user.username}</h1>
        <p>Gender: {this.state.user.gender}</p>
        <p>Hometown: {this.state.user.hometown}</p>
        <p>Occupation: {this.state.user.occupation}</p>
        <p>Description: {this.state.user.description}</p>
      </Panel>
      </div>
    );

  }
}

export default UserDetail