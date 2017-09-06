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