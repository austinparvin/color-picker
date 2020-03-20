import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    hValue: 0,
    sValue: 0,
    lValue: 0,
    aValue: 0,
  }

  trackHValue = e => {
    console.log(e.target.value)
    this.setState({
      hValue: parseInt(e.target.value),
    })
  }

  trackSValue = e => {
    console.log(e.target.value)
    this.setState({
      sValue: parseInt(e.target.value),
    })
  }
  trackLValue = e => {
    console.log(e.target.value)
    this.setState({
      lValue: parseInt(e.target.value),
    })
  }
  trackAValue = e => {
    console.log(e.target.value)
    this.setState({
      aValue: parseInt(e.target.value),
    })
  }

  render() {
    return (
      <main>
        <section class="color">
          <h1 class="color-header">Color</h1>
          <div className="color-background">
            <div
              style={{
                backgroundColor:
                  'hsl(' +
                  this.state.hValue +
                  ', ' +
                  this.state.sValue +
                  '%, ' +
                  this.state.lValue +
                  '%, ' +
                  this.state.aValue / 100 +
                  ')',
              }}
              class="color-display"
            ></div>
          </div>
        </section>
        <section>
          <div class="slidecontainer">
            <h1>H</h1>
            <input
              onChange={this.trackHValue}
              type="range"
              min="1"
              max="360"
              defaultValue="180"
            />
          </div>
          <div class="slidecontainer">
            <h1>S</h1>
            <input
              onChange={this.trackSValue}
              type="range"
              min="1"
              max="100"
              defaultValue="50"
            />
          </div>
          <div class="slidecontainer">
            <h1>L</h1>
            <input
              onChange={this.trackLValue}
              type="range"
              min="1"
              max="100"
              defaultValue="50"
            />
          </div>
          <div class="slidecontainer">
            <h1>A</h1>
            <input
              onChange={this.trackAValue}
              type="range"
              min="1"
              max="100"
              defaultValue="100"
            />
          </div>
        </section>
      </main>
    )
  }
}

export default App
