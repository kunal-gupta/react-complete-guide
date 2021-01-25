import './App.css';
import React, {useState} from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';


const App = props=>{
  const[userNameState, changeUserNameState] = useState({
    userName: "Ross"
  });

  const changeUserNameHandler = (event) =>{
    changeUserNameState({
        userName: event.target.value
    });
  }


    return (
      <div className="App">
        <UserInput userName={userNameState.userName} userNameChangeHandler={changeUserNameHandler}/>
        <UserOutput userName={userNameState.userName}/>
      </div>
    );
  
}

export default App;
