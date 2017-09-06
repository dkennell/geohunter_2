import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserList from '../components/UserList'
import UserDetail from '../components/UserDetail'
import CacheDetail from '../components/CacheDetail'
import CacheList from '../components/CacheList'
import Home from '../components/Home'
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
              <Route exact path="/caches" render={() => <CacheList caches={this.props.caches}/>}/>
              <Route path="/caches/:id" component={CacheDetail} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    caches: state.caches
  }
}

const mapDispatchToProps = (dispatch) => {
  return {setName: (name) => {
           console.log("in apps dispatch")
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

