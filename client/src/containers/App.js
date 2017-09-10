import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserList from '../components/UserList'
import UserDetail from '../components/UserDetail'
import CacheDetail from '../components/CacheDetail'
import CacheList from '../components/CacheList'
import Login from '../components/Login'
import LoggedIn from '../components/LoggedIn'
import { NavLink, Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Navbar, Nav, NavItem, Carousel } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import cache1 from '../images/cache1.jpg'
import cache2 from '../images/cache2.jpg'
import hiking1 from '../images/hiking1.jpg'
import hiking2 from '../images/hiking2.jpg'
import phone1 from '../images/phone1.jpg'

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
          <Carousel>
                <Carousel.Item className="short-image">
                  <img className="img-responsive center-block" alt="900x500" src={hiking1}/>
                  <Carousel.Caption>
                    <h3>Get Outside</h3>
                    <p>Stop programming for once and get some vitamin D!</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="short-image">
                  <img className="img-responsive center-block" alt="900x500" src={cache1}/>
                  <Carousel.Caption>
                    <h3>Find Treasure</h3>
                    <p>It's one man's trash!</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="short-image">
                  <img width={1600} alt="900x500" src={phone1}/>
                  <Carousel.Caption>
                    <h3>Look at your phone</h3>
                    <p>But do it outside for once!</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="short-image">
                  <img width={1600}alt="900x500" src={cache2}/>
                  <Carousel.Caption>
                    <h3>Make your own caches</h3>
                    <p>Then make hippie suckers run around looking for it. Ha!</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="short-image">
                  <img alt="900x500" src={hiking2}/>
                  <Carousel.Caption>
                    <h3>Look at the sky</h3>
                    <p>Ponder the meaning of your life!</p>
                  </Carousel.Caption>
                </Carousel.Item>
          </Carousel>
          <div>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/users" render={() => <UserList users={this.props.users}/>}/>
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

