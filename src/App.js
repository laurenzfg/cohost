import React from 'react';
import firebase from './firebase' 
import './App.css';
import Stopwatch from './Stopwatch'
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bgcol: "white", time: 0};
  }

  handleBlinkenlight = () => {
    var nextbgcol = "";
    if(this.state.bgcol === "#85f779") {
      nextbgcol =  "#ff3300";
    } else {
      nextbgcol =  "#85f779";
    }
    firebase.database().ref('/').update({bgcol: nextbgcol});
  }

  handleRestartTimer = () => {
    firebase.database().ref('/').update({time: Date.now()});
  }

  componentDidMount () {
    var updatebg = firebase.database().ref('/');
    updatebg.on('value', (snapshot) => {
      var v = snapshot.val(); 
      this.setState({bgcol: v.bgcol, time: v.time});
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{backgroundColor: this.state.bgcol}}>
          <div style={{fontSize: '3em', backgroundColor: '#1a1a1a', opacity : '0.7', padding: '10px', borderRadius: '7px', fontFamily: 'monospace'}}>
            <Stopwatch time={this.state.time}/>
          </div>
          <Button variant="contained" size="large" color="primary" onClick={this.handleBlinkenlight} style={{marginTop: '2em'}}>
            Toggle the blinkenlight
          </Button>
          <Button variant="contained" size="small" onClick={this.handleRestartTimer} style={{marginTop: '9em'}}>
            Restart the timer
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
