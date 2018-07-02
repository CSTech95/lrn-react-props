import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name = 'React Props' />
      </div>
    );
  }
}

class Greet extends React.Component{
  render() {
    return(
      // Class Components requires this keyword on props(Due to instances of components when being created)
      <h1>Greetings {this.props.name}</h1>
    )
  }
}

/*Functional Components takes in props as an argument*/
// const Greet = (props) => {
//   return(
//using es6 fat arrow to bind 'this' keyword so no need to include before '{props.name}' like in a class based component
//     <h1>Greetings {props.name}</h1>
//   )
// }

export default App;
