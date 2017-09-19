const currentUserReducer = (state = {username: "Fake Breaking Bad Fan", id: 1}, action) => {
	switch (action.type){
		case "SET_CURRENT_USER":
		  	return action.payload
		default:
		  return state
	}
}

export default currentUserReducer