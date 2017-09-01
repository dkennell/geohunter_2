import React, { Component } from 'react';
import { connect } from 'react-redux'
import Main from './Main'
import User from './User'

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
           dispatch({
             type: "SET_NAME",
             payload: name
            })
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
