export const checkSession = () => {
  	return (dispatch) => {
      fetch('http://localhost:3001/sessions')
	    .then((response) => response.json())
	    .then((info) => {
	       let username = "(Not Logged In)"
	       let id = 0
	       if (info !== undefined) {
	       	 username = info.username
	       	 id = info.id
	       	}
	       dispatch({
	         type: "SET_CURRENT_USER",
	         payload: {username, id}
	       })
	    })
	}
}

export const destroySession = () => {
		fetch('http://localhost:3001/sessions/1')
		.then((reponse) => window.location.reload())
	}
