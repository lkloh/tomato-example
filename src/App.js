import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Timer extends Component {

  constructor() {
    super();
    this.state = {
      countDown : false,
      remainingSeconds : 25 * 60,
    };
  }

  componentDidMount() {
    // setInterval(() => {
    //   if (this.state.remainingSeconds > 0) {
    //     this.setState(prevState => {
    //       return {remainingSeconds : prevState.remainingSeconds - 1};
    //     });
    //   }
    // }, 1000);
  }

  handleStart() {
    this.setState(prevState => {
      return {
        remainingSeconds : 25 * 60, 
        countDown : true,
      };
    });

    setInterval(() => {
      if ((this.state.remainingSeconds > 0) && this.state.countDown) {
        this.setState(prevState => {
          return {remainingSeconds : prevState.remainingSeconds - 1};
        });
      }
    }, 1000);
  }

  handleStop() {
    this.setState(prevState => {
      return {
        remainingSeconds : prevState.remainingSeconds,
        countDown : false,
      };
    });
  }

  handleReset() {
    this.setState(prevState => {
      return {
        remainingSeconds : 25 * 60, 
        countDown : false,
      };
    });
  }

  render() {
    return (
      <div>
        <p>Remaining time: {this.state.remainingSeconds}</p>
        <button className="start" onClick={() => this.handleStart()}> Start </button>
        <button className="stop" onClick={() => this.handleStop()}> Stop </button>
        <button className="reset" onClick={() => this.handleReset()}> Reset </button>
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
