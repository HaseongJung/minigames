import React, { useState, useRef, useEffect } from 'react';
import '../styles/Gugudan.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/Modal.css";

const Gugudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('🙄');
  const [score, setScore] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (parseInt(value) === first * second) {
      setResult('😊');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      setScore(score + 1);
    } else {
      setResult('🤔');
      setValue('');
      setScore(score - 1);
    }
  };

  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <div className='container'>
      <div className="modal show" style={{ display: 'block', position: 'initial' }} >
        <Modal className="my-modal" show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>구구단 게임</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>주어진 구구단문제에 대한 답을 입력하고 Enter를 누르세요!</p>
                <p>정답/오답에 따라 스코어가 반영됩니다!</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
      </div>
      <div className='Phone'>
        <div className='Display'>
          <div className="gugudan">
            <form onSubmit={onFormSubmit} className="gugudan-form">
              <span className="question">
                {first} x {second} ={' '}
              </span>
              <input
                type="number"
                ref={inputRef}
                value={value}
                onChange={onInputChange}
                className="answer"
                required
              ></input>
            </form>
            <div className="result">{result}</div>
            <div className="score">Score: {score}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gugudan;