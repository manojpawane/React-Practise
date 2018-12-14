import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
 
  state = { 
    persons: [
     { id:"1", name: "Max", age: 29 },
     { id:"2", name: "Manu", age: 25 },
     { id:"3", name: "Steve", age: 66 }
  ],
    otherstate: "some other value",
    showPersons: false
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons:persons
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
             click = {this.deletePersonHandler.bind(this, index)}
             name={person.name}
             age={person.age}
             key={person.id}
            />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I am react App</h1>
        <p>Hi, its really working</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
        {person}
      </div>
    );
  }
}

export default App;
