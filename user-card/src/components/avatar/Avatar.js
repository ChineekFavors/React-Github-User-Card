import React from 'react';

import styled from 'styled-components';


const AvatarDiv = styled.div`
	width: 40%;
	margin-top: 20px;

`;

 const Avatar = props => {


	return (
		<AvatarDiv>
			<img className='avatar' 
				src={props.avatar} 
				alt="avatar" />	
		</AvatarDiv>		
	);
	
};
export default Avatar;