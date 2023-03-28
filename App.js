import React, { useState, useEffect } from 'react';
import './App.css';

function CountdownTimer() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const handleStartClick = () => {
    setTimerOn(true);
  };

  const handleStopClick = () => {
    setTimerOn(false);
  };

  const handleResetClick = () => {
    setTime(0);
    setTimerOn(false);
  };

  const handleInputChange = e => {
    setTime(e.target.value);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <input type="number" min="0" value={time} onChange={handleInputChange} />
        <button onClick={handleStartClick}>Start</button>
        <button onClick={handleStopClick}>Stop</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
      <h2>{formatTime()}</h2>
    </div>
  );
}

export default CountdownTimer;
