import React, { Component } from 'react';
import TimeInput from '../containers/TimeInputContainer';
import Calculate from './Calculate';
import Waiting from '../containers/Waiting';

class Speed extends Component {
  constructor(props) {
    super(props);
    this.setSpeedData = this.setSpeedData.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  setSpeedData() {
    const data = JSON.stringify(this.props.acc);
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
    const accs = [];
    for (let key in this.props.acc) {
      accs.push({ type: key, ...this.props.acc[key] });
    }
    return (
      <div className="Speed">
        {accs.map(category => (
          <div key={category.type} className="speed-input">
            <div>{category.title}가속</div>
            {category.data.map((el, index) => (
              <TimeInput
                key={`${category.type}${index}`}
                type={category.type}
                index={index}
                value={el}
              />
            ))}
            <Calculate data={category.data} />
          </div>
        ))}
        <div className="speed-input">
          <Waiting />
        </div>
      </div>
    );
  }
}

export default Speed;
