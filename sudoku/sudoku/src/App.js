





import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="Box">
        {
          this.props.number ? (
            <div>{this.props.number}</div>
          ) : (
            <input className="Box-input" type="number"/>
          )
        }
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="full-box">
        <div className="column-box">
          <div className="boxes">
            <Box number={3} />
            <Box answer={1} />
            <Box answer={2} />
            <Box number={4} />
          </div>
          <div className="boxes">
            <Box number={3} />
            <Box answer={1} />
            <Box answer={2} />
            <Box number={4} />
          </div>
        </div>
        <div className="column-box">
          <div className="boxes">
            <Box number={3} />
            <Box answer={1} />
            <Box answer={2} />
            <Box number={4} />
          </div>
          <div className="boxes">
            <Box number={3} />
            <Box answer={1} />
            <Box answer={2} />
            <Box number={4} />
          </div>
          </div>
      </div>
    );
  }
} 

export default App;
