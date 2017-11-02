import React, { Component } from 'react';
import './App.css';
import KittenImage from './components/KittenImage'

class App extends Component {
  state = { mews: 0, kittenLevel: 0, upgradeAvailable: false, upgradeCost: 10 }
  handleKittenClick = () => this.setState(({ mews, upgradeCost }) => ({
    mews: mews + 1,
    upgradeAvailable: mews + 1 >= upgradeCost,
  }))

  upgradeKitten = () => {
    this.setState(({ mews, upgradeCost, kittenLevel }) => ({
      mews: mews - upgradeCost,
      upgradeCost: upgradeCost * 2,
      upgradeAvailable: mews - upgradeCost >= upgradeCost * 2,
      kittenLevel: kittenLevel + 1,
    }))
  }

  render() {
    const { mews, upgradeAvailable, kittenLevel, upgradeCost } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Click on the kitty!</h1>
          <p>Mews: {mews}</p>
        </header>
        <p className="App-intro">
          <KittenImage onClick={this.handleKittenClick} kittenLevel={kittenLevel} />
        </p>
        <button disabled={!upgradeAvailable} onClick={this.upgradeKitten}>Upgrade kitten for {upgradeCost} mews</button>
        <p>
          Kitten images sourced from <a href="https://www.instagram.com/riepoyonn/">@riepoyonn</a>
        </p>
      </div>
    );
  }
}

export default App;
