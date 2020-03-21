import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  // sets random hsl() color values
  state = {
    hValue: Math.floor(Math.random() * Math.floor(360)),
    sValue: Math.floor(Math.random() * Math.floor(100)),
    lValue: Math.floor(Math.random() * Math.floor(100)),
    aValue: Math.floor(Math.random() * Math.floor(100)),
  }

  // sets random hsl() color values when button is clicked
  randomizeColor = e => {
    this.setState({
      hValue: Math.floor(Math.random() * Math.floor(360)),
      sValue: Math.floor(Math.random() * Math.floor(100)),
      lValue: Math.floor(Math.random() * Math.floor(100)),
      aValue: Math.floor(Math.random() * Math.floor(100)),
    })
  }

  // setTextColor = () => {
  //   this.state.lValue > 50
  //     ? this.setState({ textColor: 'black' })
  //     : this.setState({ textColor: 'white' })
  // }

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
          <h1 class="color-header">
            {(this.state.aValue < 100 ? 'hsla(' : 'hsl(') +
              this.state.hValue +
              ', ' +
              this.state.sValue +
              '%, ' +
              this.state.lValue +
              '%, ' +
              this.state.aValue / 100 +
              ')'}
          </h1>
          <div className="color-background">
            <div
              style={{
                backgroundColor:
                  'hsla(' +
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
          <p className="color-text"></p>
        </section>
        <section>
          <div class="slidecontainer">
            <h1>H</h1>
            <input
              onChange={this.trackHValue}
              type="range"
              min="1"
              max="360"
              value={this.state.hValue}
            />
          </div>
          <div class="slidecontainer">
            <h1>S</h1>
            <input
              onChange={this.trackSValue}
              type="range"
              min="1"
              max="100"
              value={this.state.sValue}
            />
          </div>
          <div class="slidecontainer">
            <h1>L</h1>
            <input
              onChange={this.trackLValue}
              type="range"
              min="1"
              max="100"
              value={this.state.lValue}
            />
          </div>
          <div class="slidecontainer">
            <h1>A</h1>
            <input
              onChange={this.trackAValue}
              type="range"
              min="1"
              max="100"
              value={this.state.aValue}
            />
          </div>
          <div className="randomize-button">
            <button
              style={{
                backgroundColor:
                  'hsla(' +
                  this.state.hValue +
                  ', ' +
                  this.state.sValue +
                  '%, ' +
                  this.state.lValue +
                  '%, ' +
                  this.state.aValue / 100 +
                  ')',
              }}
              onClick={this.randomizeColor}
              className="button2"
            >
              Randomize
            </button>
          </div>
        </section>
      </main>
    )
  }
}

export default App
