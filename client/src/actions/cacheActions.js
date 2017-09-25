export const setCaches = () => {
  return (dispatch) => {
  	fetch('http://localhost:3001/caches')
  	  .then((result) => result.json())
  	  .then((cachesJson) => dispatch({
  	  	                     type: "SET_CACHES",
  	  	                     payload: cachesJson
  	                        })
  	        )
   }
}

export const addCache = (userInfo) => {
  	return {type: "ADD_CACHE",
  	        payload: userInfo
  	       }
  }