import React, { useContext } from "react";
import { useTimer } from "react-timer-hook";
import { useNavigate } from "react-router-dom";
import { Timer } from "./Mytimer.styled";
import { GlobalContext } from '../../GlobalContext/GlobalContextProvider';
import { MdOutlineTimer } from "react-icons/md";
function MyTimer({ time }: any) {
  const nav = useNavigate();
  const ctx= useContext(GlobalContext);
  
  const{saveIsCompleted, logout} = ctx

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    autoStart: true,
    onExpire: () => {
      console.log("onExpire called");
      sessionStorage.clear();
      saveIsCompleted(
        { 
          "html-and-css": false,
          "javascript": false,
          "typescript": false,
          "react": false,
          "node-js": false,
          "git": false,
        }
      )
      nav("/", { replace: true });
      logout()
    },
  });

  return (
    <Timer>
      
      {/* <FaClock/> */}
      <MdOutlineTimer color="rgb(145, 85, 253)"/>
      <span>
        {hours < 10 ? "0" : ""}
        {hours}
      </span>
      :
      <span>
        {minutes < 10 ? "0" : ""}
        {minutes}
      </span>
      :
      <span>
        {seconds < 10 ? "0" : ""}
        {seconds}
      </span>
    </Timer>
  );
}

export default React.memo(MyTimer);
