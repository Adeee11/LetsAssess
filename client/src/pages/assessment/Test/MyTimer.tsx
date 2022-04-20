import React, { useContext } from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';

function MyTimer({time, onComplete}:any) {
  
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
      onComplete();
    }
  });


  return (
    <span>{hours}:{minutes}:{seconds}</span>    
  );
}

export default React.memo(MyTimer);