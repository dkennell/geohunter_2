import React, { Component } from 'react';

class CacheDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      cache: {}
    }
  }

  componentDidMount(){
  const id = this.props.match.params.id
    fetch('http://localhost:3001/caches/' + id)
      .then((result) => result.json())
      .then((cache) => this.setState({cache}))
      .catch((error) => console.log("Error in the fetch: ", error))
  }

  render(){
    return (
      <div>
        <h1>Cache #{this.state.cache.id}</h1>
        <p>Latitude: {this.state.cache.latitude}</p>
        <p>Longitude: {this.state.cache.longitude}</p>
        <p>Difficulty: {this.state.cache.difficulty}</p>
        <p>Number of visits: {this.state.cache.number_of_visits}</p>
      </div>
    );

  }
}

export default CacheDetail