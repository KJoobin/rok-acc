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
  }
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
    totalHours *= (1 + Number(cur)) / (1 + Number(cur) + Number(add));
    for (let i = 0; i < support.length; i += 1) {
      if (totalHours * 0.01 > 3) {
        totalHours *= 0.99;
      } else {
        totalHours -= 3;
      }
    }
    totalHours = totalHours > 0 ? totalHours : 0;
    accDays = Math.floor(totalHours / 24);
    accHours = Math.floor(totalHours - accDays * 24);
    return (
      <div className="Waiting">
        <div>계산기</div>
        <div>
          <span>현제 걸리는 시간 : </span>
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
          <span>현재 속도 버프</span>
          <input
            type="number"
            onChange={e => this.handleInput('cur', e)}
            value={cur}
            placeholder="현재"
          />
          <span>%</span>
        </div>
        <div>
          <span>추가 속도 버프</span>
          <input
            type="number"
            onChange={e => this.handleInput('add', e)}
            value={add}
            placeholder="추가"
          />
          <span>%</span>
        </div>
        <div>
          <span>지원 가능 횟수</span>
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
            {accDays}일{accHours}시간
          </span>
        </div>
      </div>
    );
  }
}

export default Waiting;
