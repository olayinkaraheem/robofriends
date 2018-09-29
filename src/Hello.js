import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <div className="f4 tc">
        <h1>Welcome</h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

export default Hello;