import React from 'react';

import styled from 'styled-components';

const RepoDiv = styled.div`
	margin: 0 auto;
	width: 50%;
	font-size: 1.6rem;
	position: relative;
	left: 15%;
	top: -250px;


`;

 const Repositories = props => {


	return (
		<RepoDiv>
		<p className="repositories" > 
			Public Repositories: {props.repository}
		</p>
		</RepoDiv>	
	);
	
};
export default Repositories;