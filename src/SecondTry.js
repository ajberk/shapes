import React, { Component } from 'react';
import Rx from 'rxjs';
import Square from './Square'

export default class SecondTry extends Component {
 state = {
    top: 200,
    left: 0
  }
  componentDidMount() {
    Rx.Observable.interval(100).subscribe(() => this.setState(({top, left}) => {return {top: top + 1, left: left   + 1}}))
  }

  render() {
    const { top, left } = this.state
    return (
      <div>
        <Square top={top} left={left} />
      </div>
    );
  }
}