import React from "react"

const User = (props) => {
  return(
  	<div>
        <p>{props.info.username}</p>
        <p>{props.info.gender}</p>
        <p>{props.info.hometown}</p>
        <p>{props.info.occupation}</p>
        <p>{props.info.description}</p>
        <br/>
    </div>
  )
}

export default User