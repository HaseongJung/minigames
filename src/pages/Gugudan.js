import React, { useState, useRef, useEffect } from 'react';

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

  return (
    <div className="gugudan">
      <div className="score">Score: {score}</div>
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
    </div>
  );
};

export default Gugudan;