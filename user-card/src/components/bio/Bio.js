import React from 'react';

import styled from 'styled-components';



const BioDiv = styled.div`

	margin: 0 auto;
	width: 50%;
	font-size: 1.3rem;
	position: relative;
	top: -200px;
	

`;

 const Bio = props => {


	return (
		<BioDiv>
			<p>{props.bio}</p>
		</BioDiv>
	);
	
};
export default Bio;