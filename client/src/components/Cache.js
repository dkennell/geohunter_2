import React from "react"
import { Panel } from 'react-bootstrap'

const Cache = (props) => {
  return(
  	<div>
    <Panel>
        <a href={"/caches/" + props.info.id}><p>Cache id: {props.info.id}</p></a>
        <p>Latitutde: {props.info.latitude}</p>
        <p>Longitude: {props.info.longitude}</p>
        <br/>
        </Panel>
    </div>
  )
}

export default Cache