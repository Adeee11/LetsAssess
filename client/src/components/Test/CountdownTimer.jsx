import React from 'react';
import Countdown from 'react-countdown';
import CompleteStatus from './CompleteStatus';




const CountdownTimer = () => {
    const renderer = ({ hours, minutes, seconds, completed }) => {
    
    if (completed) {
      return <CompleteStatus/>;
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  return (
  
       <Countdown
        date={Date.now() + 1200000}
        renderer={renderer}
  />
 
   
    
  )
}

export default React.memo(CountdownTimer)