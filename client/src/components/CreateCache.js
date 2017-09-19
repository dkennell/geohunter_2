import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class CreateCache extends React.Component{
  	constructor(props){
		super(props)
		this.state = {
			redirect: false,
			cacheId: 0
		}
	}

 createCache = (event) => {
    event.preventDefault()
    fetch('http://localhost:3001/caches',
  	  {
  	    method: 'post',
  	    body: new FormData(document.getElementById("newCacheForm"))  	  
  	  })
      .then((response) => response.json())
      .then((cacheInfo) => this.handleNewCache(cacheInfo)) 
      .catch((error) => {console.log("Error in the Post User fetch: ", error)})	
    }

 handleNewCache = (cacheInfo) => {
      this.props.history.push('/caches/' + cacheInfo.id)
      }


  render() {
	return(
		<div>
		  <h1>Create Cache</h1>
		  <form id="newCacheForm" onSubmit={(event) => this.createCache(event)}>
		    <label htmlFor="name">Name: </label>
		    <input type="text" id="name" name="name"/><br/>
		    <label htmlFor="latitude">Latitude: </label>
		    <input type="text" id="latitude" name="latitude"/><br/>		    
		    <label htmlFor="longitude">Longitude: </label>
		    <input type="text" id="longitude" name="longitude"/><br/>
		    <label htmlFor="difficulty">Difficulty: </label>
		    <input type="text" id="difficulty" name="difficulty"/><br/>
		    <label htmlFor="description">Description: </label>
		    <input type="text" id="description" name="description"/><br/>
		    <label htmlFor="number_of_visits">Number of Visits: </label>
		    <input type="text" id="number_of_visits" name="number_of_visits"/><br/>
		    <input type="hidden" id="creator_id" name="creator_id" value={this.props.userId}></input><br/>
		    <input type="submit"/>
		  </form>
		</div>

		)
    }
}


const mapStateToProps = (state) => {
  return { userId: state.currentUser.id
}
}

const mapDispatchToProps = () => {
  return { sayHello: () => console.log("hey")}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCache)

