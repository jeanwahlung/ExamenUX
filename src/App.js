import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Log from './loginrender';
import './loginrender.css'

class App extends Component {
  render() {
    return (


      <div className="root-container">

        <Log />
      </div>

    );
  }
}

export default App;
