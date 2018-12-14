import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: 29 },
      { name: "Manu", age: 25 },
      { name: "Steve", age: 66 }
    ],
    otherstate: "some other value"
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: "Maximum", age: 39 },
        { name: newName, age: 35 },
        { name: "Steven", age: 56 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Maximum", age: 39 },
        { name: event.target.value, age: 35 },
        { name: "Steven", age: 56 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am react App</h1>
        <p>Hi, its really working</p>
        <button onClick={this.switchNameHandler.bind(this, 'Elon')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Elon')}
          changed={this.nameChangedHandler} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
