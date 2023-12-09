import React, { useState, useRef, useEffect, useMemo, memo } from 'react';

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
    backgroundColor: background,
  };

  return <div style={style}>{number}</div>;
});

const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [winNumbers]);

  const onClickRedo = () => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  };

  return (
    <>
      <div>당첨 숫자</div>
      {winBalls.map((v) => (
        <Ball key={v} number={v} />
      ))}
      <div>보너스</div>
      {bonus && <Ball key={bonus} number={bonus} />}
      {redo && <button onClick={onClickRedo}>다시!</button>}
    </>
  );
};

export default Lotto;




