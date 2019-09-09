import React from 'react';

import Avatar from "../avatar/Avatar.js"
import Name from "../name/Name.js"
import Location from "../location/Location.js"
import Repositories from "../repositories/Repositories.js"
import Following from "../following/Following.js"
import Bio from "../bio/Bio.js"

const Card = props => {
	
	
	return (
		
		<div className="userCard">
			<Avatar avatar={props.name['avatar_url']} />
			<Name name={props.name.name} />
			<Location location={props.name.location} />
			<Repositories repository={props.name['public_repos']}/>
			<Following following={props.name.following} 
				followers={props.name.followers}
			/>
			<Bio bio={props.name.bio}/>

		</div>
	);
	
}
export default Card;
