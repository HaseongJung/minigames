import React, { Component, useState } from 'react';
import '../styles/NumberBaseball.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/Modal.css";

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
    show: true,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.quiz.join('') === this.state.userInput) {
      this.setState({
        result: '홈런!',
        userInput: '',
        quiz: ranmderNumber(),
        tries: [...this.state.tries, { try: this.state.userInput, result: '홈런!' }],
      });
    } else {
      const userInputArray = this.state.userInput.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        this.setState({
          result: `10번 넘게 시도했습니다. 정답은 ${this.state.quiz.join(',')} 였습니다.`,
        });
        alert('게임을 다시 시작합니다.');
        this.setState({
          userInput: '',
          quiz: ranmderNumber(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i++) {
          if (userInputArray[i] === this.state.quiz[i]) {
            strike += 1;
          } else if (this.state.quiz.includes(userInputArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [...this.state.tries, { try: this.state.userInput, result: `${strike} 스트라이크, ${ball}볼 입니다.` }],
          userInput: '',
        });
      }
    }
  };
  
  onChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleClose = () => this.setState({show: false});
  
  render() {
    return (
      <div className='container'>
        <div className="modal show" style={{ display: 'block', position: 'initial' }} >
          <Modal className="my-modal" show={this.state.show} onHide={this.handleClose} size="xl" centered>
              <Modal.Header closeButton>
                  <Modal.Title>숫자야구 게임</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  <p>컴퓨터가 생각한 4자리 숫자를 정확하게 맞추면 되는 게임입니다.</p><br/>
                  <p>참여자가 4자리 숫자를 입력하면, 컴퓨터는 자신이 생각한 숫자와 비교해서 숫자와 자리가 정확하게 일치한 숫자의 개수를 스트라이크(S)로 알려 줍니다.</p>
                  <p>숫자는 일치하지만 자리가 일치하지 않는 숫자의 개수는 볼(B) 에 표시해 줍니다.</p>
                  <p>그리고 일치하지 않는 숫자의 개수는 아웃(OUT) 에 표시해 줍니다.</p><br/>
                  <p>그럼 이제 4자리의 숫자를 맞혀보세요!</p>
              </Modal.Body>

              <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
          </Modal>
        </div>
        <div className='Phone'>
          <div className='Display'>
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
      </div>
    );
  }
}

export default NumberBaseball;