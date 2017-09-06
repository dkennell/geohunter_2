import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import userReducer from './reducers/userReducers'
import usersReducer from './reducers/usersReducers'
import cachesReducer from './reducers/cachesReducers'
import { setUsers } from './actions/userActions'
import { setCaches } from './actions/cacheActions'

let reducer = combineReducers({user: userReducer, caches: cachesReducer, users: usersReducer})

const store = createStore(reducer, {}, applyMiddleware(logger, thunk))

store.subscribe(() => console.log("Store subscription - Current State: ", store.getState()))

store.dispatch(setUsers())
store.dispatch(setCaches())

export default store