const cachesReducer = (state = [], action) => {
	switch (action.type){
		case "SET_CACHES":
		  let newState = action.payload
		  return newState
		case "ADD CACHE":
		  return [...state.concat(action.payload)]
		default:
		  return state
	}
}

export default cachesReducer