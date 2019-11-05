import React from 'react';

import styled from 'styled-components';


const FollowingDiv = styled.div`

	margin: 0 auto;
	width: 50%;
	font-size: 1.3rem;
	position: relative;
	left: 15%;
	top: -270px;
	display: flex;
  	flex-direction: row;
  	justify-content: space-around;



`;

 const Following = props => {


	return (
		<FollowingDiv>
		<p>Following: {props.following}</p>
		<p>Followers: {props.followers}</p>
		</FollowingDiv>

	);
	
};
export default Following;