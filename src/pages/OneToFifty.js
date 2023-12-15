import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import '../styles/OneToFifty.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/Modal.css";

let array = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.button`
  margin-top: 30px;
  width: 100px;
  height: 50px;
  background-color: #ffffff;
  border: none;
  &:hover {
    background-color: #FFE7E7;
  }
`;

const BoardContainer = styled.div`
  width: 400px;
  height: 400px;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  margin: 49px auto auto auto;
`;

const CellContainer = styled.div`
  border: 1px solid #FFE7E7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const TimerContainer = styled.div`
  margin-top: 30px;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const Front = styled.div`
  text-align: right;
`;

const Back = styled.div`
  width: 1em;
`;

function Cell({ num, handleClick }) {
  return (
    <CellContainer onClick={() => handleClick(num)}>
      {num !== 0 ? num : null}
    </CellContainer>
  );
}

function Board({ numbers, handleClick }) {
  return (
    <BoardContainer>
      {numbers.map((num, index) => (
        <Cell num={num} key={index} handleClick={handleClick}></Cell>
      ))}
    </BoardContainer>
  );
}

function Timer() {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const record = useRef();
  record.current = timeElapsed;
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(timeElapsed => timeElapsed + 30);
    }, 30);
    return () => {
      alert("Your Record :" + record.current / 1000);
      clearInterval(timer);
    };
  }, []);
  return (
    <TimerContainer>
      <Front>{Math.floor(timeElapsed / 1000)}:</Front>
      <Back>{(timeElapsed % 1000) / 10}</Back>
    </TimerContainer>
  );
}

function OneToFifty() {
  const [numbers, setNumbers] = useState(array);
  const [gameFlag, setGameFlag] = useState(false);
  const [current, setCurrent] = useState(1);
  const handleClick = num => {
    if (num === current && gameFlag) {
      if (num === 50) {
        console.log("Success");
        endGame();
      }
      const index = numbers.indexOf(num);
      setNumbers(numbers => [
        ...numbers.slice(0, index),
        num < 26 ? num + 25 : 0,
        ...numbers.slice(index + 1)
      ]);
      setCurrent(current => current + 1);
    }
  };
  const startGame = () => {
    setNumbers(shuffleArray(array));
    setCurrent(1);
    setGameFlag(true);
  };
  const endGame = () => {
    setGameFlag(false);
  };

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <div className='container'>
      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
        <Modal className="my-modal" show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>1~50 숫자세기 게임</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>최대한 빠르게 1부터 50까지의 숫자를 순서대로 클릭하는 게임입니다.</p>
                <p>start버튼을 눌러 시작하세요! 스톱워치가 시작됩니다!</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
      </div>
      <div className="Phone">
          <Container>
            <Board numbers={numbers} handleClick={handleClick}></Board>
            {gameFlag ? (
              <Timer />
            ) : (
              <StartButton onClick={startGame}>Start</StartButton>
            )}
          </Container>
      </div>
    </div>
  );
}

export default OneToFifty;