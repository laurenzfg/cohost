import React, { Component } from "react";
import "./App.css";

class Stopwatch extends Component {
  state = {
    timerTime: 0
  };

  componentDidMount ()  {
    this.timer = setInterval(() => {
        this.setState({
          timerTime: Date.now() - this.props.time
        });
    }, 10);
  }

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="Stopwatch">
        <div>
          {hours} : {minutes} : {seconds} : {centiseconds}
        </div>
      </div>
    );
  }
}

export default Stopwatch;
