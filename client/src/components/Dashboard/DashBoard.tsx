import { useContext, useEffect, useState } from "react";
import { Container } from "./Dashboard.styled";
import { useNavigate } from "react-router-dom";
import { MyTimer } from "../MyTimer";
import { CardComponent } from "../CardComponent";
import slugify from "slugify";
import { GlobalContext } from "../../GlobalContext/GlobalContextProvider";

const DashBoard = () => {
  const [data, setData] = useState<{
    data: { durationInMins: number; title: string }[];
    iat: number;
    exp: number;
  }>();

  const [expTime, setExpTime] = useState<any>();

  const nav = useNavigate();

  const ctx = useContext(GlobalContext);
  const { token, isCompleted, url } = ctx;

  let expiryTimeStamp = new Date(0);

  const clickHandler = (arg: string) => {
    nav(arg);
  };

  useEffect(() => {
    // console.log("token", token);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    (() => {
      // console.log("IIFE");
    })();
    fetch(`${url}/assessment`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setData({ ...result });
        expiryTimeStamp.setUTCSeconds(result.exp);
        // console.log("Expiry time epoch", result.exp);
        // console.log("DATE", expiryTimeStamp);
        setExpTime(expiryTimeStamp);
        sessionStorage.setItem("expTime", expiryTimeStamp.toUTCString());
      })
      .catch((error) => console.log("error", error));
  }, [ token, url]);

  useEffect(()=>{
    const keys = Object.values(isCompleted);
    let navigateToHome = true;
    for (let y = 0; y < keys.length; y++) {
      if (keys[y] === false) navigateToHome = false;
    }
    if (navigateToHome) {
      nav("/", { replace: true });
      sessionStorage.clear();
    }
  },[])
  

  return (
    <>
      {data && data.data.length > 0 && (
        <>
          {expTime && <MyTimer time={expTime} />}

          <Container>
            {data.data.map((test: any, index: number) => (
              <CardComponent
                key={test.title}
                title={test.title}
                durationInMins={20}
                isCompleted={
                  isCompleted[test.title.replace(/\s+/g, "-").toLowerCase()]
                }
                clickHandler={() =>
                  clickHandler(slugify(test.title).toLowerCase())
                }
              />
            ))}
          </Container>
        </>
      )}
    </>
  );
};

export default DashBoard;
