import {useContext,useEffect,useState} from "react";
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
  const [expTime, setExpTime] = useState<any>();
  const nav = useNavigate();
  const ctx = useContext<any>(GlobalContext);
  const {token, isCompleted, url}= ctx

  let expiryTimeStamp = new Date(0);
  
  
  
  const imageSrc = (title: string) => {
    if (title == "JavaScript") return "/images/js.png";
    else if (title == "HTML and CSS") return "/images/html.png";
    else if(title ==="Typescript") return "/images/ts.svg";
    else if(title ==="Node js") return "/images/node.png";
    else if(title ==="React") return "/images/react.png";
    else if(title ==="Git") return "/images/git.png";
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
    fetch(`${url}/assessment`, {
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
       sessionStorage.setItem('expTime',expiryTimeStamp.toUTCString())
      })
      .catch((error) => console.log("error", error));
  }, []);
  let is:string| null=sessionStorage.getItem('isCompleted')  
  
  if(is) {console.log("session storage data",JSON.parse(is));}
  console.log(is);
  
  console.log(isCompleted)
  const keys =  Object.values(isCompleted)
  let navigateToHome=true
  for(let y=0; y<keys.length; y++){
    if(keys[y]==false)
    navigateToHome=false

  }
  if(navigateToHome){
    nav('/', {replace:true});
    // alert("All Tests have completed")
    sessionStorage.clear();
  }
  navigateToHome && nav('/');
  console.log("navigatetohome",navigateToHome);
  console.log("keys",keys)
  
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
                  {!isCompleted[test.title.replace(/\s+/g, '-').toLowerCase()] && <p className="start" onClick={() => clickHandler(test.title)}>
                    Start
                  </p>}
                  {isCompleted[test.title.replace(/\s+/g, '-').toLowerCase()] && <p className="start">Completed</p>}
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
