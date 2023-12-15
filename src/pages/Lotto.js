import React, { useState, useRef, useEffect, useMemo, memo } from 'react';
import '../styles/Lotto.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/Modal.css";


function getWinNumbers() {
  const balls = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (balls.length > 0) {
    shuffle.push(balls.splice(Math.floor(Math.random() * balls.length), 1)[0]);
  }
  const bonus = shuffle[shuffle.length - 1];
  const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);

  return [...winBalls, bonus];
}

const Ball = memo(({ number }) => {
  let background;
  if (number < 10) {
    background = 'red';
  } else if (number < 20) {
    background = 'orange';
  } else if (number < 30) {
    background = 'yellow';
  } else if (number < 40) {
    background = 'blue';
  } else {
    background = 'green';
  }

  const style = {
    display: 'inline-block',
    border: '1px solid black',
    borderRadius: '20px',
    width: '40px',
    height: '40px',
    lineHeight: '40px',
    fontSize: '20px',
    textAlign: 'center',
    marginRight: '20px',
    justifyContent: 'space-around',
    backgroundColor: background,
  };

  return <div style={style}>{number}</div>;
});

const Lotto = () => {
  const [start, setStart] = useState(false);
  const [userNumbers, setUserNumbers] = useState(Array(7).fill(0));
  const [isWin, setIsWin] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [winNumbers, setWinNumbers] = useState([]);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  const checkWin = () => {
    const winNumbersWithoutBonus = winNumbers.slice(0, 6);
    const userNumbersWithoutBonus = userNumbers.slice(0, 6);
    if (JSON.stringify(winNumbersWithoutBonus.sort()) === JSON.stringify(userNumbersWithoutBonus.sort()) 
      && winNumbers[6] === userNumbers[6]) {
      setIsWin(true);
    } else {
      setIsWin(false);
    }
  };

  const onClickStart = () => {
    setStart(true);
    setWinNumbers(getWinNumbers());
  };

  useEffect(() => {
    if (!start) return;

    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
      checkWin();
      setShowResult(true);
    }, 7000);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [start]);

  const onClickRedo = () => {
    setStart(false);
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    setIsWin(false);
    setShowResult(false);
    timeouts.current = [];
  };

  const handleChangeNumber = (e, idx) => {
    const newUserNumbers = [...userNumbers];
    newUserNumbers[idx] = Number(e.target.value);
    setUserNumbers(newUserNumbers);
  };

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <div className='container'>
      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
        <Modal className="my-modal" show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>구구단 게임</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>주어진 문제에 대한 답을 입력하고 Enter를 누르세요!</p>
                <p>정답/오답에 따라 스코어가 반영됩니다!</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
      </div>
      <div className='Lotto_Phone'>
          <div className='Lotto_Display'>
          {start && <div className='Winning'>당첨 숫자</div>}
          {winBalls.map((v) => (
            <Ball key={v} number={v} />
          ))}
          {start && <div className='Bonus'>보너스</div>}
          {bonus && <Ball key={bonus} number={bonus} />}
          <br/>
          <div className='My'>
          <div className='MySe'>내 번호 입력하기</div>
          {userNumbers.map((number, idx) => (
            <input 
              key={idx} 
              value={number} 
              onChange={(e) => handleChangeNumber(e, idx)} 
              style={{ width: '30px', margin: '0 5px' }} 
            />
          ))}
          </div>
          {showResult && (isWin ? <div className='Win'>⭐⭐당첨!⭐⭐</div> : <div className='Lose'>꽝!</div>)}
          {!start ? <h1 onClick={onClickStart} className='Start'>시작!</h1> : redo && <button onClick={onClickRedo} className='Re'>다시!</button>}
          </div>
        </div>
    </div>
  );
};

export default Lotto;



