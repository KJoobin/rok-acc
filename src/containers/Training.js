import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calculate from '../components/Calculate';
import TrainingCalculate from '../components/TrainingCalculate';

class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSpeed: '',
      hasRoon: false,
      hasBuff: false,
      hasKingdomBuff: false,
    };
    this.onChange = this.onChange.bind(this);
    this.toggleRoon = this.toggleRoon.bind(this);
    this.toggleKingdomBuff = this.toggleKingdomBuff.bind(this);
    this.toggleBuff = this.toggleBuff.bind(this);
    this.setInitTrining = this.setInitTrining.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  onChange(e) {
    const value = e.target.value;
    if (value >= 0) {
      this.setState({ curSpeed: value });
    }
  }

  toggleRoon() {
    this.setState({ hasRoon: !this.state.hasRoon });
  }
  toggleKingdomBuff() {
    this.setState({ hasKingdomBuff: !this.state.hasKingdomBuff });
  }
  toggleBuff() {
    this.setState({ hasBuff: !this.state.hasBuff });
  }

  setInitTrining() {
    const data = this.state.curSpeed;
    localStorage.setItem('trainingSpeed', data);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.setInitTrining);
  }

  componentDidMount() {
    const loadData = localStorage.getItem('trainingSpeed');
    if (loadData) {
      this.setState({ curSpeed: loadData });
    }
    window.addEventListener('beforeunload', this.setInitTrining);
  }
  render() {
    const { curSpeed, hasRoon, hasBuff, hasKingdomBuff } = this.state;
    let speed = 1;
    speed += Number(curSpeed) / 100;
    speed += hasRoon ? 0.15 : 0;
    speed += hasBuff ? 0.1 : 0;
    speed += hasKingdomBuff ? 0.1 : 0;
    return (
      <div className="Training">
        <div className={'sub-title'}>
          <span>현재 훈련 가속</span>
          <span className={'colon'}> : </span>
          <Calculate data={this.props.acc} />
        </div>
        <div>
          <span>훈련속도(노버프) : </span>
          <input
            type="number"
            value={this.state.curSpeed}
            onChange={this.onChange}
            placeholder="훈련 속도"
          />
          <span> %</span>
        </div>
        <div>
          <span>전고의 부적 V (+15%)</span>
          <input type="checkbox" name="roon" onChange={this.toggleRoon} />
        </div>
        <div>
          <span>왕국 버프(+10%)</span>
          <input
            type="checkbox"
            name="kingdomBuff"
            onChange={this.toggleKingdomBuff}
          />
        </div>
        <div>
          <span>공작 (+10%)</span>
          <input type="checkbox" name="buff" onChange={this.toggleBuff} />
        </div>
        <div>
          <TrainingCalculate acc={this.props.acc} cur={speed} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ changeAcc }) => {
  return {
    acc: changeAcc.training.data,
  };
};

export default connect(mapStateToProps)(Training);
