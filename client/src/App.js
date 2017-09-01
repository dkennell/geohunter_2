import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <p>
          ALCATRAZ IS INDIAN LAND
          by:
        </p>
        {this.props.user.name}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
