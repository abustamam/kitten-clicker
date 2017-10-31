import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Click on the kitty!</h1>
        </header>
        <p className="App-intro">
          <img />
        </p>
        <p>
          Kitten images sourced from <a href="https://www.instagram.com/riepoyonn/">@riepoyonn</a>
        </p>
      </div>
    );
  }
}

export default App;
