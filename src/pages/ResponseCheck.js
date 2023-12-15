import React, { Component, useState } from 'react';
import '../styles/ResponseCheck.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class BokseupResponseCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '클릭해서 시작하기',
      bgColorState: 'waiting',
      result: [],
      show: true,
      resultHistory: [],
    };
  }

  timer;
  startTime;
  endTime;

  screenStyle = (bgColorState) => ({
    width: '400px',
    height: '300px',
    margin: '50px auto auto auto',
    borderRadius: '50px',
    textAlign: 'center',
    userSelect: 'none',
    backgroundColor:
      bgColorState === 'waiting'
        ? 'rgb(166, 194, 243)'
        : bgColorState === 'ready'
        ? 'rgb(217, 133, 133)'
        : 'rgb(217, 255, 167)',
  });

  onClickScreen = () => {
    const { bgColorState } = this.state;
  
    if (bgColorState === 'waiting') {
      this.setState({
        message: '초록색으로 바뀌면 클릭',
        bgColorState: 'ready',
      });
  
      this.timer = setTimeout(() => {
        this.startTime = new Date(); // 시간초 세기 시작
  
        this.setState({
          message: '지금 클릭!',
          bgColorState: 'now',
        });
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (bgColorState === 'ready') {
      // 빨간색 화면일 때 누르면
      this.setState((prevState) => {
        return {
          message: '너무 빨리 눌렀음',
          bgColorState: 'waiting',
        };
      });
      clearTimeout(this.timer);
    } else if (bgColorState === 'now') {
      // 초록색 화면으로 바뀌었을 때
      this.endTime = new Date();
  
      this.setState((prevState) => {
        const newResult = this.endTime - this.startTime;
        return { 
          message: '클릭해서 시작하기', 
          bgColorState: 'waiting', 
          result: [...prevState.result, newResult],
          resultHistory: [...prevState.resultHistory, newResult]
        };
      });
    }
  };

  // 결과값 평균 계산
  resultAverage = () => {
    const { result } = this.state;
    const average = result.reduce((acc, currentValue) => acc + currentValue) / result.length;

    return average;
  };

  handleClose = () => this.setState({show: false}); // 모달 닫기

  render() {
    const { bgColorState, message, result, resultHistory } = this.state;

    return (
      <div className='ResponseCheck'>
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
          <Modal className="my-modal" show={this.state.show} onHide={this.handleClose} size="lg" centered>
              <Modal.Header closeButton>
                  <Modal.Title>반응속도 체크 게임</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  <p>파란색 박스를 클릭하여 시작하세요. 박스가 초록색으로 바뀌면 바로 클릭하세요!</p>
                  <p>당신의 반응속도가 얼마나 빠른지 알려줍니다.</p>
              </Modal.Body>

              <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
          </Modal>
        </div>
        <div className='Response_Phone'>
            <div id="screen" style={this.screenStyle(bgColorState)} onClick={this.onClickScreen}>
              {message}
            </div>
            {result.length === 0 ? null : <div className='Result'> 반응 시간 평균 {this.resultAverage()} ms 걸렸어요.</div>}
          </div>
          <div className='Response_Score'>
              <div className='Response_Records'>
                <h2>⭐게임 스코어⭐</h2>
                {resultHistory.sort((a,b) => a - b).slice(0, 5).map((time, index) => (
                  <div key={index} className='Response_rank'> {index + 1}등: {time} ms</div>
                ))}
              </div>
            </div>
          </div>
    );
  }
}

export default BokseupResponseCheck;
