import React, { Component } from 'react';
import TimeInput from './TimeInput';
import Calculate from './Calculate';
import Waiting from './Waiting';

class Speed extends Component {
  constructor(props) {
    super(props);
    const initialArray = ['', '', '', '', '', '', '', '', '', '', '', '', ''];
    this.state = {
      constructor: initialArray.slice(),
      training: initialArray.slice(),
      research: initialArray.slice(),
      save: initialArray.slice(),
      general: initialArray.slice(),
    };
    this.onChange = this.onChange.bind(this);
    this.setSpeedData = this.setSpeedData.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  onChange(state, index, e) {
    const newGeneral = this.state[state].slice();
    if (e.target.value >= 0) {
      newGeneral[index] = e.target.value;
      const newState = {};
      newState[state] = newGeneral;
      this.setState(newState);
    }
  }

  setSpeedData() {
    const data = JSON.stringify(this.state);
    localStorage.setItem('speed', data);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.setSpeedData);
  }

  componentDidMount() {
    const loadData = localStorage.getItem('speed');
    if (loadData) {
      this.setState(JSON.parse(loadData));
    }
    window.addEventListener('beforeunload', this.setSpeedData);
  }

  render() {
    return (
      <div className="Speed">
        <div className="speed-input">
          <div>건설가속</div>
          {this.state.constructor.map((el, index) => (
            <TimeInput
              key={`constructor${index}`}
              type={'constructor'}
              index={index}
              value={el}
              onChange={this.onChange}
            />
          ))}
          <Calculate data={this.state.constructor} />
        </div>
        <div className="speed-input">
          <div>훈련가속</div>
          {this.state.training.map((el, index) => (
            <TimeInput
              key={`training${index}`}
              index={index}
              type={'training'}
              value={el}
              onChange={this.onChange}
            />
          ))}
          <Calculate data={this.state.training} />
        </div>
        <div className="speed-input">
          <div>연구가속</div>
          {this.state.research.map((el, index) => (
            <TimeInput
              key={`research${index}`}
              index={index}
              type={'research'}
              value={el}
              onChange={this.onChange}
            />
          ))}
          <Calculate data={this.state.research} />
        </div>
        <div className="speed-input">
          <div>치료가속</div>
          {this.state.save.map((el, index) => (
            <TimeInput
              key={`save${index}`}
              index={index}
              type={'save'}
              value={el}
              onChange={this.onChange}
            />
          ))}
          <Calculate data={this.state.save} />
        </div>
        <div className="speed-input">
          <div>일반가속</div>
          {this.state.general.map((el, index) => (
            <TimeInput
              key={`general${index}`}
              index={index}
              type={'general'}
              value={el}
              onChange={this.onChange}
            />
          ))}
          <Calculate data={this.state.general} />
        </div>
        <div className="speed-input">
          <Waiting />
        </div>
      </div>
    );
  }
}

export default Speed;
