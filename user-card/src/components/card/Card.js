import React from 'react';

import Avatar from "../avatar/Avatar.js"
import Name from "../name/Name.js"
import Location from "../location/Location.js"
import Repositories from "../repositories/Repositories.js"
import Following from "../following/Following.js"

const Card = props => {
	console.log(props.name)
	

 
	
	return (
		
		<div className="userCard">
			<Avatar avatar={props.name['avatar_url']} />
			<Name name={props.name.name} />
			<Location location={props.name.location} />
			<Repositories repository={props.name['public_repos']}/>
			<Following following={props.name.following} 
				followers={props.name.followers}
			/>

		</div>
	);
	
}
export default Card;
