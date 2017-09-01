import React from "react"

const User = (props) => {
  return(
  	<div>
        <p>by:</p>
        <p>{props.user.name}</p>
    </div>
  )
}

export default User