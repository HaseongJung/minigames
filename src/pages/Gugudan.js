import React, { useState, useRef, useEffect } from 'react';
import '../styles/Gugudan.css';

const Gugudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('🙄');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [finalScores, setFinalScores] = useState([]);
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
      setGameOver(false);
    } else {
      setResult('🤔');
      setValue('');
      setFinalScores([...finalScores, score]);
      setScore(0);
      setGameOver(true);
    }
  };

  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  const resetGame = () => {
    setFirst(Math.ceil(Math.random() * 9));
    setSecond(Math.ceil(Math.random() * 9));
    setValue('');
    setResult('🙄');
    setScore(0);
    setGameOver(false);
  }

  return (
    <div className='Gugudan'>
      <div className='Gugudan_Phone'>
        <div className='Gugudan_Display'>
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
                disabled={gameOver}
              ></input>
            </form>
            <div className="result">{result}</div>
            <div className="score">Score: {score}</div>
            {gameOver && <button className="Gugudan_Button" onClick={resetGame}>다시하기</button>}
          </div>
        </div>
      </div>
      <div className='Gugudan_Score'>
        <div className='Gugudan_records'>
          <h2>⭐게임 스코어⭐</h2>
          {finalScores.sort((a, b) => b - a).slice(0, 5).map((score, index) => (
            <div key={index} className='Gugudan_rank'>{index + 1}등: {score} 점</div>
          ))}
                </div>
            </div>
      </div>
  );
};

export default Gugudan;