import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

let userReducer = (state = {name: "Max", age: 36}, action) => {
	switch (action.type){
	  case "SET_NAME":
	    return {
	    	...state,
	    	name: action.payload
	    }
	   case "SET_AGE":
	    return {
	    	...state,
	    	age: action.payload
	    }
	  default:
	    return state
	}
}

let mathReducer = (state = {result: 1}, action) => {
	switch (action.type){
	  case "ADD":
	    let newState = {
	    	...state,
	    	result: state + action.payload
	    }
	    return newState
	  default:
	    return state
	}
}

let reducer = combineReducers({user: userReducer, math: mathReducer})

let store = createStore(reducer, {}, applyMiddleware(logger))

store.subscribe(() => console.log("Store subscription - Current State: ", store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
