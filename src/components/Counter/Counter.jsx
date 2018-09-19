import './Counter.css';

import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blablba: 'blaba',
      iterator: 1,
    };
  }

  handleClick = (event) => {
    const addition = event.target.name === 'minus' ? -1 : 1;
    this.setState((prevState) => {
      return {
        ...prevState,
        iterator: prevState.iterator + addition,
      }
    });
  }

  render() {
    const { iterator } = this.state;

    return (
      <div>
        <button name="minus" onClick={this.handleClick}>-</button>
        {iterator}
        <button name="plus" onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
