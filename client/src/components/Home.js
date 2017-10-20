import React from 'react'
import Login from './Login'
import UsersTile from './UsersTile'
import CachesTile from './CachesTile'
import { connect } from 'react-redux'
import MyCarousel from '../components/MyCarousel'
import { Col } from 'react-bootstrap'




class Home extends React.Component {
  
  renderHome = () => {
	if (
        JSON.stringify(this.props.currentUser) !== JSON.stringify({})){
		this.props.history.push('/users/' + this.props.currentUser.id)
	} else {
			return(
			<div>
			  <MyCarousel/>
			  <Col sm={6} md={4}>
			    <Login/>
			  </Col>
  			  <Col sm={6} md={4}>
			    <UsersTile/>
			  </Col>
  			  <Col sm={6} md={4}>
			    <CachesTile/>
			  </Col>

			</div>
			)
	}
  }


  render(){
	return(
		<div>
		  {this.renderHome()}
		</div>
		)
  }
}


const mapStateToProps = (state) => {
	return {
	  currentUser: state.users.currentUser
	}
}


export default connect(mapStateToProps)(Home)