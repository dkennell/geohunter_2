const userReducer = (state = {name: "Max", age: 36}, action) => {
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

export default userReducer