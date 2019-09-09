import React from 'react';

 const Avatar = props => {
	console.log(props.avatar);


	
	return (
		<img src={props.avatar} alt="avatar" />	
	);
	
};
export default Avatar;