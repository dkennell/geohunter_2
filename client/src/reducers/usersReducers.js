const usersReducer = (state = [], action) => {
	switch (action.type){
		case "SET_USERS":
		  let newState = action.payload
		  return newState
		default:
		  return state
	}
}

export default usersReducer