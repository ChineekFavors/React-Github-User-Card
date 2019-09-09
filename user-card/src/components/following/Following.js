import React from 'react';

 const Following = props => {


	return (
		<div className='divFollowing'>
		<p>Following: {props.following}</p>
		<p>Followers: {props.followers}</p>
		</div>

	);
	
};
export default Following;