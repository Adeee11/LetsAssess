import React, { useContext } from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';

function MyTimer({time}:any) {
  
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
    expiryTimestamp:time,
    autoStart: true,
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

    
    </div>
  );
}

export default React.memo(MyTimer);