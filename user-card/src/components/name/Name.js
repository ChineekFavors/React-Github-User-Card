import React from 'react';

import styled from 'styled-components';


const NameDiv = styled.div`
	margin: 0 auto;
	width: 50%;
	font-size: 1.6rem;
	position: relative;
	left: 15%;
	top: -280px;


`;

 const Name = props => {


	return (
		<NameDiv>
		<h2 className="name" >{props.name}</h2>	
		</NameDiv>
	);
	
};
export default Name;