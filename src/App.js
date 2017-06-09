import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Timer extends Component {

  constructor() {
    super();
    this.state = {
      remainingSeconds : 25 * 60,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.remainingSeconds > 0) {
        this.setState(prevState => {
          return {remainingSeconds : prevState.remainingSeconds - 1};
        });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>Remaining time: {this.state.remainingSeconds}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tomato Timer</h2>
        </div>
        <Timer />
      </div>
    );
  }
}

export default App;
