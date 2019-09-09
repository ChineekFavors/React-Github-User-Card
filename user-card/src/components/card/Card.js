import React from 'react';

import Avatar from "../avatar/Avatar.js"
import Name from "../name/Name.js"
import Location from "../location/Location.js"

const Card = props => {
	console.log(props.name.location)
	

 
	
	return (
		
		<div className="userCard">
			<Avatar avatar={props.name['avatar_url']} />
			<Name name={props.name.name} />
			<Location location={props.name.location} />

		</div>
	);
	
}
export default Card;
