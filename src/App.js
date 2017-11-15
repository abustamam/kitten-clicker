import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class Counter extends Component {
  state = {
    count: 0,
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    const { count } = this.state
    return (
      <div className="Mycomponent" onClick={this.handleClick.bind(this)}>
        Hi i am my component {count}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and load to reload.
        </p>
        <Counter />
        <Counter />
        <Counter />
      </div>
    )
  }
}

export default App
