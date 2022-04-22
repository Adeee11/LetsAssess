import React, { useContext } from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
import { Timer } from './Mytimer.styled';

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
    <Timer>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
    </Timer>
  );
}

export default React.memo(MyTimer);