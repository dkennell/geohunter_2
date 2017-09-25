import React from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import MyCarousel from '../components/MyCarousel'

class Home extends React.Component {
  
  renderHome = () => {
	if (
        JSON.stringify(this.props.currentUser) !== JSON.stringify({})){
		this.props.history.push('/users/' + this.props.currentUser.id)
	} else {
		return(
			<div>
			  <MyCarousel/>
			  <Login/>
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