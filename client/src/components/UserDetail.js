import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UserDetail extends Component {

  cacheList = () => {
    if (this.props.caches == {}){
      return(<p>No caches yet!</p>)
    } else {
      return this.props.caches.map((cache, index) => {
        return (
          <li key={index}><Link to={'/caches/' + cache.id}>{cache.name}</Link></li>
        )
      })
    }
  }

  renderNewCacheLink = () => {
    if (this.props.user.id == this.props.currentUser.id){
      return(
        <div>
          <Link to="/caches/new">(Create New)</Link><br/><br/>
        </div>
      )      
    }
  }

  render(){
    if (!!this.props.user){
    return (
      <div>
      <Panel>
        <h1>{this.props.user.username}</h1>
        <p>Gender: {this.props.user.gender}</p>
        <p>Hometown: {this.props.user.hometown}</p>
        <p>Occupation: {this.props.user.occupation}</p>
        <p>Description: {this.props.user.description}</p>
        <h3>Caches Created: </h3>
        {this.renderNewCacheLink()}
        <ul>
          {this.cacheList()}
        </ul>
      </Panel>
      </div>
    ); 
 } else { return null }
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id
  let user = state.users.allUsers.find((user) => {return user.id == id})
  if (!!user && !!id && !!state.caches) {
    return {
      user: user,
      caches: state.caches.filter((cache) => {return cache.creator_id == user.id}),
      currentUser: state.users.currentUser
    }
  } else {
    return {}
  }
}

export default connect(mapStateToProps)(UserDetail)