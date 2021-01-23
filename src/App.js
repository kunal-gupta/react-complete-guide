import './App.css';
import React, {useState} from 'react'
import Person from './Person/Person'

const App = props =>{
  /**
  * You can have multiple useState hook and you can modify each useStateHook at a time.
  */
  const[personState, setPersonState] = useState({
    persons:[
      {name: "Vishal", age:25},
      {name: "Khushi", age:35},
      {name: "Aarohi", age:5}
    ],
    otherState: "this will be untouched"
  });

  const switchNameHandler = () =>{
  //console.log("Switch name clicked")
  setPersonState({
      persons:[
        {name: "Bharti", age:25},
        {name: "Khushi", age:35},
        {name: "Aarya", age:5}
      ]
  });
    
  };

  return (
    <div className="App">
      <h1> Hi! I am a react App</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}>
        I am awesome, keep entertaining all
      </Person>
    </div>
    
  );

}

export default App;
