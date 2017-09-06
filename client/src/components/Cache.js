import React from "react"

const Cache = (props) => {
  return(
  	<div>
        <p>Cache id: {props.info.id}</p>
        <p>Latitutde: {props.info.latitude}</p>
        <p>Longitude: {props.info.longitude}</p>
        <p>Difficulty: {props.info.difficulty}</p>
        <p>Description: {props.info.description}</p>
        <p>Number of Visits: {props.info.number_of_visits}</p>
        <br/>
    </div>
  )
}

export default Cache