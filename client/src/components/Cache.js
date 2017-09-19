import React from "react"
import { Panel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cache = (props) => {
  return(
  	<div>
    <Panel>
        <Link to={"/caches/" + props.info.id}><p>{props.info.name}</p></Link>
        <p>Latitutde: {props.info.latitude}</p>
        <p>Longitude: {props.info.longitude}</p>
        <br/>
        </Panel>
    </div>
  )
}

export default Cache