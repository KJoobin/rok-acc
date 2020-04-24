import React from 'react';

class Waiting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: '',
      hours: '',
      cur: '',
      add: '',
      support: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentWillUnmount() {}

  handleInput(state, e) {
    const change = {};
    change[state] = e.target.value;
    this.setState(change);
  }
  render() {
    const { days, hours, cur, add, support } = this.state;
    let totalHours = Number(days) * 24 + Number(hours);
    let accDays = 0;
    let accHours = 0;
    totalHours *=
      (1 + Number(cur) / 100) / (1 + (Number(cur) + Number(add)) / 100);
    for (let i = 0; i < Number(support); i += 1) {
      if (totalHours * 60 * 0.01 > 3) {
        totalHours *= 0.99;
      } else {
        totalHours -= 3;
      }
    }
    totalHours = totalHours > 0 ? totalHours : 0;
    accDays = Math.floor(totalHours / 24);
    accHours = Math.ceil(totalHours - accDays * 24);
    return (
      <div className="Waiting">
        <div>업글레이드 시간 계산기</div>
        <div>
          <span>현재 걸리는 시간 : </span>
          <input
            type="number"
            onChange={e => this.handleInput('days', e)}
            value={days}
            placeholder="일"
          />
          <span>일</span>
          <input
            type="number"
            onChange={e => this.handleInput('hours', e)}
            value={hours}
            placeholder="시간"
          />
          <span>시간</span>
        </div>
        <div>
          <span>현재 속도 : </span>
          <input
            type="number"
            onChange={e => this.handleInput('cur', e)}
            value={cur}
            placeholder="현재"
          />
          <span>%</span>
        </div>
        <div>
          <span>추가 속도 : </span>
          <input
            type="number"
            onChange={e => this.handleInput('add', e)}
            value={add}
            placeholder="추가"
          />
          <span>%</span>
        </div>
        <div>
          <span>지원 가능 횟수 : </span>
          <input
            type="number"
            onChange={e => this.handleInput('support', e)}
            value={support}
            placeholder="지원"
          />
          <span>번</span>
        </div>
        <div>
          <span>
            {accDays}일 {accHours}시간
          </span>
        </div>
      </div>
    );
  }
}

export default Waiting;
