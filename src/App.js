import React, { Component } from 'react';
import './App.css';
import KittenImage from './components/KittenImage'

class App extends Component {
  state = { mews: 0 }
  handleClick = () => this.setState(({ mews }) => ({ mews: mews + 1 }))
  render() {
    const { mews } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Click on the kitty!</h1>
          <p>Mews: {mews}</p>
        </header>
        <p className="App-intro">
          <KittenImage onClick={this.handleClick} />
        </p>
        <p>
          Kitten images sourced from <a href="https://www.instagram.com/riepoyonn/">@riepoyonn</a>
        </p>
      </div>
    );
  }
}

export default App;
