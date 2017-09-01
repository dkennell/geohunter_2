const mathReducer = (state = {result: 1}, action) => {
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

export default mathReducer