import React from 'react';

import './App.css';

import Card from "./components/card/Card";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      user:[],
    };
  }

  componentDidMount(){
    fetch('https://api.github.com/users/chineekfavors')
      .then(res => res.json())
      .then(data => this.setState({user: data }))
      .then(() => console.log(this.state.user))
      .catch(error => console.log('there was a problem', error))
  };

  render(){
    return (
      <div className="App">
      <h1>Github-User-Card</h1>
      <Card user={this.state.user}/>
        
      </div>
    );
  }
}

export default App;
