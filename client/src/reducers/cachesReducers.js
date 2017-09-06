const cachesReducer = (state = [], action) => {
	switch (action.type){
		case "SET_CACHES":
		  let newState = action.payload
		  return newState
		default:
		  return state
	}
}

export default cachesReducer