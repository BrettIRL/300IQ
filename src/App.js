import React, { Component } from 'react';
import StartScene from './components/StartScene/';
import QuizScene from './components/QuizScene/';
import EndScene from './components/EndScene/';
import { colors } from './constants';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      counter: 1,
      bgColor: '#282c34',
      started: false,
      quit: false
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleQuit = this.handleQuit.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  componentDidMount() {
    if (!this.quitCheck()) {
      this.randomizeColor();
    }
  }

  handleStart(name) {
    this.setState({
      ...name,
      started: true
    });
  }

  incrementCounter () {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleQuit() {
    localStorage.setItem('eq-quit', JSON.stringify({
      name: this.state.name,
      counter: this.state.counter
    }));
    this.setState({ quit: true });
  }

  quitCheck() {
    const quit = localStorage.getItem('eq-quit');
    if (quit) {
      const { name, counter } = JSON.parse(quit);
      this.setState({ name, counter, started: true, quit: true });
      return true;
    } else {
      return false;
    }
  }

  randomizeColor() {
    const randColor = colors[Math.floor(Math.random() * 7)]
    this.setState({ bgColor: randColor });
  }

  render() {
    const { bgColor } = this.state;
    const { started, quit } = this.state;
    let component;

    if (!started) {
      component = <StartScene bgColor={this.state.bgColor} handleStart={this.handleStart} />;
    } else if (quit) {
      component = <EndScene bgColor={this.state.bgColor} name={this.state.name} counter={this.state.counter}/>;
    } else {
      component = <QuizScene bgColor={bgColor} counter={this.state.counter} incrementCounter={this.incrementCounter} confirmQuit={this.handleQuit} />
    }
    return (
      <div className="App">
        { component }
      </div>
    );
  }
}

export default App;
