import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserList from './UserList'
import UserDetail from '../components/UserDetail'
import CacheDetail from '../components/CacheDetail'
import CacheList from '../components/CacheList'
import Login from '../components/Login'
import LoggedIn from '../components/LoggedIn'
import MyCarousel from '../components/MyCarousel'
import { NavLink, Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <LoggedIn/>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a>GeoHunter</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <LinkContainer to="/"><NavItem>Home</NavItem></LinkContainer>
              <LinkContainer to="/users"><NavItem>Users</NavItem></LinkContainer>
              <LinkContainer to="/caches"><NavItem>Caches</NavItem></LinkContainer>
            </Nav>
          </Navbar>
          <MyCarousel/>
          <div>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/users" render={() => <UserList/>}/>
              <Route path="/users/:id" component={UserDetail}/>
              <Route exact path="/caches" render={() => <CacheList caches={this.props.caches}/>}/>
              <Route path="/caches/:id" component={CacheDetail}/>
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

