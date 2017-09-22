import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CacheDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      cache: {},
      user: {}
    }
  }

  componentDidMount(){
  const id = this.props.match.params.id
    fetch('http://localhost:3001/caches/' + id)
      .then((result) => result.json())
      .then((cache) => this.handleFetch(cache))
      .catch((error) => console.log("Error in the fetch: ", error))
  }

  handleFetch = (cache) => {
    this.setState({
      cache: cache,
      user: this.props.users.filter((user) => {return user.id === cache.creator_id})[0]
    })
  }

  render(){
    return (
      <div>
        <Panel>
        <h1>{this.state.cache.name}</h1>
        <p>Latitude: {this.state.cache.latitude}</p>
        <p>Longitude: {this.state.cache.longitude}</p>
        <p>Difficulty: {this.state.cache.difficulty}</p>
        <p>Number of visits: {this.state.cache.number_of_visits}</p>
        <p>Description: {this.state.cache.description}</p>
        <span>Created By: </span><Link to={'/users/' + this.state.user.id}>{this.state.user.username}</Link>
      </Panel>
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {users: state.users.allUsers}
}

export default connect(mapStateToProps)(CacheDetail)
