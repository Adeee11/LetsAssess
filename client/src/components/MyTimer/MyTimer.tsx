import React, { } from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';

function MyTimer({ expiryTimestamp }: any) {
  const nav = useNavigate();
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      console.log('onExpire called')
      nav('/')
    }
  });


  return (
    <div className="timer">
      <p>
        <span>TotalTime </span>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </p>

      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
    </div>
  );
}

export default MyTimer;