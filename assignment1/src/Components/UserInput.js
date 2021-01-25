import react from 'react';
import './Component.css';

const userInput = (props) => {
	return(
		<div className="inputLabel">
		<p>Enter user Name:</p> 
		<input type="text" onChange={props.userNameChangeHandler} value={props.userName}/>
		</div>
	)
};

export default userInput;