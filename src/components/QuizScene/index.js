import React, { Component } from 'react';
import { operators, tips } from '../../constants';

class QuizScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operator: '',
      number: 0,
      tip: ''
    };

    this.handleNext = this.handleNext.bind(this);
    this.handleQuit = this.handleQuit.bind(this);
  }

  componentDidMount() {
    this.randomize();
  }

  handleNext() {
    this.props.incrementCounter();
    this.randomize();
  }

  handleQuit() {
    const confirmed = window.confirm(
      'If you quit now, you won\'t be able to play again. Are you sure you\'re done?'
    );

    if (confirmed) {
      this.props.confirmQuit();
    }
  }

  randomize() {
    const randomOperator = operators[Math.floor(Math.random() * 2)];
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    this.setState({
      operator: randomOperator,
      number: randomNumber,
      tip: tips[this.props.counter]
    });
  }

  render() {
    const { bgColor } = this.props;
    const { operator, number, tip} = this.state;

    return (
      <div className="wrapper" style={ {backgroundColor: bgColor } }>
        <a className="quit-link" onClick={this.handleQuit}>&times;</a>
        <h2 className="operator">{ operator }</h2>
        <h2 className="number">{ number }</h2>
        <button onClick={this.handleNext}>Next</button>
        <span className="tip">{ tip }</span>
      </div>
    );
  }
}

export default QuizScene;