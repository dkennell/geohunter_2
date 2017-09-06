import React from 'react'
import Cache from './Cache'

const CacheList = (props) => {
	return(
		<div>
		  <p>CacheList:</p><br/>
		  {renderCaches(props.caches)}
		</div>
		)
}

const renderCaches = (caches) => {
	return caches.map((cache, index) => {
		return(
			<Cache key={index} info={cache}/>
			)
	})
}

export default CacheList