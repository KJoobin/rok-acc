import React, { Component } from 'react';
import TimeInput from './TimeInput';
import Calculate from './Calculate';

class Speed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constructor: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      training: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      research: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      save: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      general: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(state, index, e) {
    const newGeneral = this.state[state].slice();
    if (!Number.isNaN(Number(e.target.value))) {
      newGeneral[index] = e.target.value;
    }
    const newState = {};
    newState[state] = newGeneral;
    this.setState(newState);
  }

  render() {
    return (
      <div>
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
        <input onChange={e => this.changeConstructor(0, e)} type="text" />
        <input onChange={e => this.changeResearch(0, e)} type="text" />
        <input onChange={e => this.changeTraining(0, e)} type="text" />
      </div>
    );
  }
}

export default Speed;
