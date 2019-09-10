import React from 'react';

import styled from 'styled-components';

import Avatar from "../avatar/Avatar.js";
import Name from "../name/Name.js";
import Location from "../location/Location.js";
import Repositories from "../repositories/Repositories.js";
import Following from "../following/Following.js";
import Bio from "../bio/Bio.js";


const UserCard = styled.div`
	padding-top: 60px;
	margin: 0 auto;
	border: 1px solid black
	width: 50%;

`;


const Card = props => {
	
	
	return (
		
		<UserCard>
			<Avatar avatar={props.name['avatar_url']} />
			<div className="nameLocationDiv">
				<Name name={props.name.name} />
				<Location location={props.name.location} />
			</div>
			
			<Repositories repository={props.name['public_repos']}/>
			<Following following={props.name.following} 
				followers={props.name.followers}
			/>
			
			<Bio bio={props.name.bio}/>

		</UserCard>
	);
	
}
export default Card;
