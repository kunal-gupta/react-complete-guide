import './App.css';
import React, {Component} from 'react'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name: "Vishal", age:25},
      {name: "Khushi", age:35},
      {name: "Aarohi", age:5}
    ],
    otherState: "this will be untouched"
  }

  switchNameHandler = () =>{
    //console.log("Switch name clicked")
    this.setState({
        persons:[
          {name: "Bharti", age:25},
          {name: "Khushi", age:35},
          {name: "Aarya", age:5}
        ]
    })
    
  }

  render(){
    return (
      <div className="App">
        <h1> Hi! I am a react App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I am awesome, keep entertaining all</Person>
      </div>
      
    );
  }
}

export default App;
