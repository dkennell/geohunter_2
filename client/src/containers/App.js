import React, { Component } from 'react';
import { connect } from 'react-redux'
import Main from '../components/Main'
import UserList from '../components/UserList'
import { setName } from '../actions/userActions'

class App extends Component {
  render() {
    return (
      <div>
        <p>
          ALCATRAZ IS INDIAN LAND
        </p>
        <UserList users={this.props.users}/>
        <Main changeUsername={() => this.props.setName("Anna")}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {setName: (name) => {
           dispatch(setName(name))
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
