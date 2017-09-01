export const setName = (name) => {
  return (dispatch) => {
  	setTimeout(() => {
  		dispatch({
  			type: "SET_NAME",
  			payload: name
  		})
  	}, 2000)
  }
}

export const setAge = (age) => {
  return {
  	type: "SET_AGE",
  	payload: age
  }
}

///////////// MY NEW SHIT /////////////////////

export const setUsers = () => {
  return (dispatch) => {
  	fetch('http://localhost:3001/users')
  	  .then((result) => result.json())
  	  .then((usersJson) => dispatch({
  	  	                     type: "SET_USERS",
  	  	                     payload: usersJson
  	                        })
  	        )
   }
}