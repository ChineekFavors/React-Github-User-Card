import React from 'react';

import styled from 'styled-components';


const LocationDiv = styled.div`
	margin: 0 auto;
	width: 50%;
	font-size: 1.4rem;
	position: relative;
	left: 15%;
	top: -270px;


`;


 const Location = props => {


	return (
		<LocationDiv>
		<h3 className="location" >
			Location: {props.location}
		</h3>
		</LocationDiv>	
	);
	
};
export default Location;