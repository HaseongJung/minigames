import React, { Component } from 'react';
import '../styles/NumberBaseball.css';

function ranmderNumber() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chose = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chose);
  }

  return array;
}

ranmderNumber();

class NumberBaseball extends Component {
  state = {
    userInput: '',
    result: '',
    quiz: ranmderNumber(),
    tries: [],
    triesCount: [],
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.quiz.join('') === this.state.userInput) {
      this.setState((prevState) => ({
        result: '홈런!',
        userInput: '',
        quiz: ranmderNumber(),
        tries: [],
        triesCount: [...prevState.triesCount, prevState.tries.length + 1],
      }));
    } else {
      const userInputArray = this.state.userInput.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        this.setState((prevState) => ({
          result: `10번 넘게 시도했습니다. 정답은 ${this.state.quiz.join(',')} 였습니다.`,
          userInput: '',
          quiz: ranmderNumber(),
          tries: [],
          triesCount: [...prevState.triesCount, 10],
        }));
        alert('게임을 다시 시작합니다.');
      } else {
        for (let i = 0; i < 4; i++) {
          if (userInputArray[i] === this.state.quiz[i]) {
            strike += 1;
          } else if (this.state.quiz.includes(userInputArray[i])) {
            ball += 1;
          }
        }
        this.setState((prevState) => ({
          tries: [...prevState.tries, { try: this.state.userInput, result: `${strike} 스트라이크, ${ball}볼 입니다.` }],
          userInput: '',
        }));
      }
    }
  };

  onChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  render() {
    return (
      <div className='NumBaseball'>
        <div className='NumBaseball_Phone'>
          <div className='NumBaseball_Display'>
            <div className='Form'>
              <form onSubmit={this.onSubmit}>
                <input value={this.state.userInput} onChange={this.onChange} type="number" />
                <button>확인</button>
              </form>
            </div>
            <br/>
            <div>시도 : {this.state.tries.length}</div>
            <div><br/>{this.state.result}</div>
          </div>
          <ul>
              {this.state.tries.map((v, index) => {
                return (
                  <li key={`${index + 1}차 시도`}>
                    {v.try} : {v.result}
                  </li>
                );
              })}
            </ul>
          </div>
        <div className='TriesCount'>
          <div className='TriesRecords'>
            <h2>⭐게임 스코어⭐</h2>
            {this.state.triesCount.sort((a, b) => a - b).slice(0, 5).map((count, index) => (
              <div key={index} className='NumBaseball_Result'>{index + 1}등: {count}번 시도</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default NumberBaseball;
