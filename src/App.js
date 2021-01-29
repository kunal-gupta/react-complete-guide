import './App.css';
import React, {Component} from 'react';
import Validation from './Components/ValidationComponent';
import Charcomponent from './Components/CharComponent';

class App extends Component {
  state = {data: {
                    text: "Demo text"
                  }
          }

  changeTextHandler = event =>{
    let data = {...this.state.data};
    data.text = event.target.value;
    this.setState({data: data});
  };

  clicks = (index) =>{
    const data = this.state.data.text.split('');
    data.splice(index, 1);
    this.setState({data:{text:data.join('')}});
  };

  render(){
    let characters = null

    
    characters = (
      <div>
        {this.state.data.text.split('').map((c, index) => {
          return <Charcomponent clicks={() => this.clicks(index)} character={c}/>
          
        })}
      </div>
    );

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.changeTextHandler(event)} value={this.state.data.text}/>
        <p>{this.state.data.text.length}</p>
        <Validation messageLength={this.state.data.text.length}></Validation>
        {characters}
      </div>
      
    );
  }
}

export default App;
