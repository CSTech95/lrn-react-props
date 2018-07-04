import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      text: 'Start Typing'
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText(text) {
    this.setState({text});
  }

  render() {
    return (
      <div className="App">
          <Child
            text={this.state.text}
            changeText={this.changeText.bind(this)}/>
      </div>
    );
  }
}

class Child extends React.Component{

handleTextChange(e) {
  const event = e.target.value;
  this.props.changeText(event);
}

  render() {
    return(
      <div>
        <input
          type='text'
           onChange={this.handleTextChange.bind(this)}/>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default App;
