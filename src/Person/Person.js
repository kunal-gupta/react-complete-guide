import React from 'react';

const person = (props) =>{
	return (
		<div>
			<p>I'm {props.name} and I am {props.age} years old <b>{props.children}</b></p>
			
		</div>	
		)
};

export default person;