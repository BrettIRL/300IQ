import React, { Component } from 'react';
import './styles.scss';

class StartScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ name: value });
  }

  handleClick() {
    const { name } = this.state;
    if (name) {
      this.props.handleStart({ name });
    }
  }

  render() {
    const { bgColor } = this.props;
    return (
      <div className="wrapper" style={{backgroundColor: bgColor }}>
        <h1>300IQ</h1>
        <h5>Enter your name to get started. Start at 0 and follow instructions.</h5>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter your name" />
        <button onClick={this.handleClick}>Start!</button>
      </div>
    );
  }
}

export default StartScene;