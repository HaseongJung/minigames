import React, { useState } from 'react';
import '../styles/RSP.css';
import p from '../assets/p.png';
import r from '../assets/r.png';
import s from '../assets/s.png';

const images = [r, p, s];
const options = ['Rock', 'Paper', 'Scissors'];

const outcomes = {
  RR: "비겼다", RP: "CPU", RS: "User",
  PP: "비겼다", PR: "User", PS: "CPU",
  SS: "비겼다", SR: "CPU", SP: "User"
};

function RSP() {
  const [userChoice, setUserChoice] = useState(r);
  const [cpuChoice, setCpuChoice] = useState(r);
  const [result, setResult] = useState("Let's Play!!");
  const [resultHistory, setResultHistory] = useState([]); 

  const onClickImage = (index) => {
    const userValue = ["R", "P", "S"][index];
    setUserChoice(images[index]);

    const num = Math.floor(Math.random() * 3);
    const cpuValue = ["R", "P", "S"][num];
    setCpuChoice(images[num]);

    const outcomeValue = outcomes[userValue + cpuValue];
    setResult(outcomeValue);
    setResultHistory(prev => [...prev, outcomeValue]);
  };

  return (
    <div className='RSP'>
      <div className='RSP_Phone'>
        <div className='RSP_Display'>
          <section className="container">
            <div className="result_field">
              <div className="result_images">
                <span className="user_result">
                  <img src={userChoice} alt="" />
                </span>
                <span className="cpu_result">
                  <img src={cpuChoice} alt="" />
                </span>
              </div>
              <div className="result">{result}</div>
            </div>
          </section>
          <div className="option_images">
              {images.map((image, index) => (
                <span className="option_image" key={index} onClick={() => onClickImage(index)}>
                  <img src={image} alt="" />
                  <p>{options[index]}</p>
                </span>
              ))}
            </div>
        </div>
      </div>
      <div className='RSP_Score'>
        <div className='RSP_Records'>
          <h2>⭐게임 스코어⭐</h2>
          {resultHistory.slice(-5).map((outcome, index) => (
            <div key={index} className='RSP_WIN'> {index + 1}번 게임: {outcome}</div>
          ))}
        </div>
      </div>
  </div>
  );
}

export default RSP;