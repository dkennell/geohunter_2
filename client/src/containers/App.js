import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserList from '../components/UserList'
import UserDetail from '../components/UserDetail'
import CacheList from '../components/CacheList'
import Home from '../components/Home'
import { setName } from '../actions/userActions'
import { NavLink, Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <NavLink to="/caches">Caches</NavLink>
            <NavLink to="/users">Users</NavLink>
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/users" render={() => <UserList users={this.props.users}/>}/>
              <Route path="/users/:id" component={UserDetail} />
             <Route path="/caches" component={CacheList}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
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

