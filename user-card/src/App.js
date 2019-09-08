import React from 'react';

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      user:[]
    };
  }

  componentDidMount(){
    fetch('https://api.github.com/users/chineekfavors')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log('there was a problem', error))
  };

  render(){
    return (
      <div className="App">
      <h1>Github-User-Card</h1>
        
      </div>
    );
  }
}

export default App;
