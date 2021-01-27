import './App.css';
import React, {Component} from 'react'
import Person from './Person/Person'


class App extends Component {
  state = {
    persons:[
      {id:"e1", name: "Vishal", age:25},//Key is required to render dom element efficiently to react
      {id:"e2", name: "Khushi", age:35},
      {id:"e3", name: "Aarohi", age:5}
    ],
    otherState: "this will be untouched",
    showPerson: true
  }

  togglePersonHandler = () => {
    if(this.state.showPerson === true){
      this.setState({
        showPerson: false
      })
    }else{
      this.setState({
        showPerson: true
      })
    }
    
  }

  changePersonName = (event, key) => {
    const persons = [...this.state.persons];
    persons.findIndex(p => {
      if(p.id === key){
        p.name = event.target.value;
      }
    })

    this.setState({persons: persons});
  }

  deleteElement = index =>{
    const persons = this.state.persons.splice(0);
    persons.splice(index,1)
    this.setState({persons: persons});
  }

  render(){
    const style={
      backgroundColor: 'white',
      border: "1px solid black",
      cursor:'pointer'
    }

    let person = null;

    if(this.state.showPerson){
      person = (
        <div>
          {this.state.persons .map((p, index) => {
            return <Person click={() => this.deleteElement(index)} name={p.name} 
                    age={p.age} key={p.id} changed={(event) => this.changePersonName(event, p.id)}/>
            
          })}
            
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hi! I am a react App</h1>
        <button style = {style} onClick={this.togglePersonHandler}>Toggle Person</button>
        {person}
      </div>
      
    );
  }
}

export default App;
