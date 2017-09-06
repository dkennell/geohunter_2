import React, { Component } from 'react';

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
        <h1>{this.state.user.username}</h1>
        <p>Gender: {this.state.user.gender}</p>
        <p>Hometown: {this.state.user.hometown}</p>
        <p>Occupation: {this.state.user.occupation}</p>
        <p>Description: {this.state.user.description}</p>
      </div>
    );

  }
}

export default UserDetail