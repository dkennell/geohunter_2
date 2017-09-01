import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import logger from 'redux-logger'
import userReducer from './reducers/userReducers'
import mathReducer from './reducers/mathReducers'

let reducer = combineReducers({user: userReducer, math: mathReducer})

const store = createStore(reducer, {}, applyMiddleware(logger))

store.subscribe(() => console.log("Store subscription - Current State: ", store.getState()))

export default store