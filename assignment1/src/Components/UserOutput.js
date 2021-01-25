import react from 'react';
import './Component.css';

const userOutput = (props) => {
	return(
		<p className="outputLabel">Inserted user name is {props.userName}</p>
	)
};
export default userOutput;