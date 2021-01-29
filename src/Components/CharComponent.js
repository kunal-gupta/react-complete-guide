import React, {Component} from 'react';
class Charcomponent extends Component{
	style = {
		display: "inline-block",
		padding: "16px",
		textAlign: "center",
		margin: "16px",
		border: "1px solid black"
	};
	

	render(){
		{console.log("rendering: "+this.props.character);}
		return(

				<p  style={this.style} onClick={this.props.clicks}>{this.props.character}</p>

		)
	};
}

export default Charcomponent;