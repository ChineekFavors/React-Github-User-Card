import React from 'react';

import './App.css';
import styled from 'styled-components';

import Card from "./components/card/Card";


const AppDiv = styled.div`
    text-align: center;
    font-family: serif;
    background-color: rgb(102, 213, 236);
    color: white;
   
  `;

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      user: []
    };
  
  }

  componentDidMount = () => {
    fetch('https://api.github.com/users/chineekfavors')
      .then(res => res.json())
      .then(data => this.setState({user: data}))
      .catch(error => console.log('there was a problem', error))
  }

  

  render(){
    return (

      <AppDiv>
        <h1>GitHub User Card</h1>
        <Card name={this.state.user} />
      </AppDiv> 
    );
  }
}

export default App;
