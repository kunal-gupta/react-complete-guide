import React, {Component} from 'react'
class Validation extends Component{

	render(){
		{
			var validationMessage = null;
			if(this.props.messageLength > 5)
				validationMessage = "Text long enough"
			else
				validationMessage = "Text too short"
		}
		return(
			<div>
				<h1>{validationMessage}</h1>
			</div>
		)
	}
}

export default Validation;