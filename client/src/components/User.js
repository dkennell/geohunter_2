import React from "react"
import { Panel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const User = (props) => {
  return(
  	<div>
      <Panel>
        <Link to={"/users/" + props.info.id}><p>{props.info.username}</p></Link>
        <p>{props.info.hometown}</p>
      </Panel>
        <br/>
    </div>
  )
}

export default User