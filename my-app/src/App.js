import React, { Component } from 'react';
import Ninjas from './Ninjas';

// Parent component, Ninja is child component
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas name = "Sally" age = "28" belt = "yellow" />
        <Ninjas name = "Yoshi" age = "30" belt = "black" />
      </div>
    );
  }
}

export default App;
