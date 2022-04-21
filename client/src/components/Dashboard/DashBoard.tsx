import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Card, Container } from "./Dashboard.styled";
import { useNavigate } from "react-router-dom";
import MyTimer from "../MyTimer/MyTimer";
import { GlobalContext } from "../../App";

const DashBoard = () => {
  const [data, setData] = useState<{
    data: { durationInMins: number; title: string }[];
    iat: number;
    exp: number;
  }>();

  const nav = useNavigate();
  const ctx = useContext<any>(GlobalContext);
  //   let time = ctx.time;
  const token = ctx.token;
  const setTime = ctx.setTime;
  let expiryTimeStamp = new Date(0);
  const [expTime, setExpTime] = useState<any>();

  //   console.log(time);
  const imageSrc = (title: string) => {
    if (title == "JavaScript") return "/images/js.png";
    else if (title == "HTML and CSS") return "/images/html.png";
    else if(title ==="Typescript") return "/images/ts.svg"
  };

  const clickHandler = (arg: string) => {
    nav(arg);
  };

  useEffect(() => {
    console.log("token", token);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    (() => {
      console.log("IIFE");
    })();
    fetch("http://localhost:9000/assessment", {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setData({ ...result });
        expiryTimeStamp.setUTCSeconds(result.exp);
        console.log("Expiry time epoch", result.exp);
        console.log("DATE", expiryTimeStamp);
        setExpTime(expiryTimeStamp)
        setTime(expiryTimeStamp);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      {data && data.data.length > 0 && (
        <>
          {expTime && <MyTimer time={expTime} />}
          <Container>
            {data.data.map((test: any, index: number) => (
              <Card key={test.title}>
                <div className="data">
                  <img src={imageSrc(test.title)} />
                  <p>{test.title}</p>
                  <span>{test.durationInMins} minute</span>
                  <p className="start" onClick={() => clickHandler(test.title)}>
                    Start
                  </p>
                </div>
              </Card>
            ))}
          </Container>
        </>
      )}
    </>
  );
};

export default DashBoard;
