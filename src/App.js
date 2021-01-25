import React from 'react';
import firebase from './firebase' 
import './App.css';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bgcol: "white"};
  }

  handleBlinkenlight = () => {
    var nextbgcol = "";
    if(this.state.bgcol === "#85f779") {
      nextbgcol =  "#ff3300";
    } else {
      nextbgcol =  "#85f779";
    }
    this.setState({bgcol: nextbgcol});
    firebase.database().ref('/').update({bgcol: nextbgcol});
  }

  componentDidMount () {
    var updatebg = firebase.database().ref('/');
    updatebg.on('value', (snapshot) => {
      var v = snapshot.val(); 
      this.setState({bgcol: v.bgcol});
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{backgroundColor: this.state.bgcol}}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button variant="contained" color="primary" onClick={this.handleBlinkenlight}>
            Toggle the blinkenlight
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
