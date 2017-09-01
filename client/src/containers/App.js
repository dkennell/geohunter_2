import React, { Component } from 'react';
import { connect } from 'react-redux'
import Main from '../components/Main'
import User from '../components/User'
import { setName } from '../actions/userActions'

class App extends Component {
  render() {
    return (
      <div>
        <p>
          ALCATRAZ IS INDIAN LAND
        </p>
        <User user={this.props.user}/>
        <Main changeUsername={() => this.props.setName("Anna")}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  }
}

const mapDispatchToProps = (dispatch) => {
  return {setName: (name) => {
           dispatch(setName(name))
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
