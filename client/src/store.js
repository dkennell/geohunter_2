import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/usersReducers'
import cachesReducer from './reducers/cachesReducers'
import currentUserReducer from './reducers/currentUserReducers'
import { setUsers } from './actions/userActions'
import { setCaches } from './actions/cacheActions'
import { checkSession } from './actions/sessionActions'

let reducer = combineReducers({users: usersReducer, caches: cachesReducer, currentUser: currentUserReducer})

const store = createStore(reducer, {}, applyMiddleware(thunk))

store.subscribe(() => console.log("Store subscription - Current State: ", store.getState()))

store.dispatch(setUsers())
store.dispatch(setCaches())
store.dispatch(checkSession())

export default store