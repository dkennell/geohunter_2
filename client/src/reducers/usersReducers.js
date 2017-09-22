import {REHYDRATE} from 'redux-persist/constants'


const usersReducer = (state = {allUsers: [], currentUser: {}}, action) => {
	switch (action.type){
        case REHYDRATE:
          return { ...state,
          currentUser: action.payload.users.currentUser }
		case "SET_USERS":
		  let newState = {
		  	...state,
		  	allUsers: action.payload
		  }
		  return newState
		case "SET_CURRENT_USER":
		  let userId = action.payload
		  let currentUser = state.allUsers.find((user) => {return user.id == userId})
		  let myState = {
		  	...state,
		  	currentUser: currentUser
		  }
		  return myState
		case "CREATE_NEW_USER":
		  return {
		  	allUsers: state.allUsers.concat(action.payload),
		  	currentUser: action.payload
		  }
		case "LOGOUT_USER":
		  return {
		  	...state,
		  	currentUser: {}
		  }
		default:
		  return state
	}
}

export default usersReducer