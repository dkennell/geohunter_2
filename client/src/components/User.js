import React from "react"
import { Panel } from 'react-bootstrap'

const User = (props) => {
  return(
  	<div>
      <Panel>
        <a href={"/users/" + props.info.id}><p>{props.info.username}</p></a>
        <p>{props.info.hometown}</p>
      </Panel>
        <br/>
    </div>
  )
}

export default User