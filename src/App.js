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

  switchNameHandler = (newName) =>{
    //console.log("Switch name clicked")
    this.setState({
        persons:[
          {name: newName, age:25},
          {name: "Khushi", age:35},
          {name: "Aarya", age:5}
        ]
    })
    
  }

  nameChangeHandler = (event) => {
    this.setState({
        persons:[
          {name: "Bharti", age:25},
          {name: "Khushi", age:35},
          {name: event.target.value, age:5}
        ]
    })
  }

  render(){
    const style={
      backgroundColor: 'white',
      border: "1px solid black",
      cursor:'pointer'
    }

    return (
      <div className="App">
        <h1> Hi! I am a react App</h1>
        <button style = {style} onClick={() => this.switchNameHandler("Aaryas!!")}>Switch name</button>
        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click = {this.switchNameHandler.bind(this, "Aaru!!")}/>
        <Person name={this.state.persons[2].name} 
                age={this.state.persons[2].age}
                changed={this.nameChangeHandler}
                >
            I am awesome, keep entertaining all
                
        </Person>
      </div>
      
    );
  }
}

export default App;
