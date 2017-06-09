import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Timer extends Component {

  constructor() {
    super();
    this.state = {
      countDown : false,
      remainingSeconds : 25 * 60,
      interval : null,
    };
  }

  handleStart() {
    var ival = setInterval(() => {
      if ((this.state.remainingSeconds > 0) && this.state.countDown) {
        this.setState(prevState => {
          return {remainingSeconds : prevState.remainingSeconds - 1};
        });
      }
    }, 1000);

    this.setState(prevState => {
      return {
        remainingSeconds : prevState.remainingSeconds, 
        countDown : true,
        interval : ival,
      };
    });
  }

  handleStop() {
    clearInterval(this.state.interval);
    this.setState(prevState => {
      return {
        remainingSeconds : prevState.remainingSeconds,
        countDown : false,
        interval : null,
      };
    });
  }

  handleReset() {
    clearInterval(this.state.interval);
    this.setState(prevState => {
      return {
        remainingSeconds : 25 * 60, 
        countDown : false,
      };
    });
  }

  formatRemainingSeconds(remainingSeconds) {
    let numMinutes = Math.floor(remainingSeconds / 60);
    let numSeconds = remainingSeconds % 60;
    let formattedTime = "";

    if (numMinutes.toString().length == 1) {
      formattedTime += '0';
      formattedTime += numMinutes.toString();
    } else {
      formattedTime += numMinutes.toString();
    }

    formattedTime += ":";

    if (numSeconds.toString().length == 1) {
      formattedTime += '0';
      formattedTime += numSeconds.toString();
    } else {
      formattedTime += numSeconds.toString();
    }

    return formattedTime;
  }

  render() {
    return (
      <div>
        <h1> {this.formatRemainingSeconds(this.state.remainingSeconds)} </h1>
        <button 
          className="start" 
          style={{backgroundColor:'green'}} 
          onClick={() => this.handleStart()}> 
            Start 
        </button>
        <button 
          className="stop" 
          style={{backgroundColor:'red'}}
          onClick={() => this.handleStop()}> 
            Stop 
        </button>
        <button  
          className="reset" 
          style={{backgroundColor:'gray'}}
          onClick={() => this.handleReset()}> 
            Reset 
        </button>
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
