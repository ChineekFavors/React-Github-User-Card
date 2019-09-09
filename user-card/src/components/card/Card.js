import React from 'react';

import Avatar from "../avatar/Avatar.js"

const Card = props => {
	console.log(props.name)
	

 
	
	return (
		
		<div className="userCard">
			<Avatar avatar={props.name['avatar_url']} />
		<h1>{props.name.name}</h1>

		</div>
	);
	
}
export default Card;
