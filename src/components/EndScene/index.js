import React, { Component } from 'react';
import './styles.scss';

class EndScene extends Component {
  render() {
    const { bgColor } = this.props;

    return (
      <div className="wrapper" style={{backgroundColor: bgColor }}>
        <h2>You quit! Disappointing...</h2>
        <h4>Name: <span>{ this.props.name }</span></h4>
        <h4>Counter: <span>{ this.props.counter }</span></h4>
      </div>
    );
  }
}

export default EndScene;