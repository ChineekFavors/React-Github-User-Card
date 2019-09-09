import React from 'react';

import Avatar from "../avatar/Avatar.js"
import Name from "../name/Name.js"

const Card = props => {
	console.log(props.name.name)
	

 
	
	return (
		
		<div className="userCard">
			<Avatar avatar={props.name['avatar_url']} />
			<Name name={props.name.name} />

		</div>
	);
	
}
export default Card;
