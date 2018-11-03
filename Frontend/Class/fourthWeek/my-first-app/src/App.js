import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      {name: 'Ed', age: 23},
      {name: 'Edd', age: 23},
      {name: 'morty', age: 23}
    ]
  }
  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Jhonny', age: 23},
        {name: 'Edd', age: 23},
        {name: 'morty', age: 23}
      ]
    });
  }
  onPersonClickHandler = (newName) => {
    this.setState ({
      persons: [
        {name: newName, age: 23},
        {name: 'Edd', age: 23},
        {name: 'morty', age: 23}
      ]
    })
  }
  togglePersonshandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }
  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <section>
          <Person name={this.state.persons[0].name} 
          age= {this.state.persons[0].age} onClick={() => this.onPersonClickHandler('Ilsen')}>Year</Person>
          <Person name={this.state.persons[1].name} age= {this.state.persons[1].age}>Year</Person>
          <Person name={this.state.persons[2].name} age= {this.state.persons[2].age}>Year</Person>
        </section>
      )
    }
    return (
      // <div className="App">
      //   <Person name="Amalia" age="23">aggggg</Person>
      // </div>
      <div className="App">
        <button onClick={this.switchNameHandler}>Click</button>
        {/* <Person name={this.state.persons[0].name} 
          age= {this.state.persons[0].age} onClick={() => this.onPersonClickHandler('Ilsen')}>Year</Person>
        <Person name={this.state.persons[1].name} age= {this.state.persons[1].age}>Year</Person>
        <Person name={this.state.persons[2].name} age= {this.state.persons[2].age}>Year</Person> */}
      </div>
    );
  }
}

export default App;
