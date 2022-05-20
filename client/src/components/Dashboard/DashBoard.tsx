import { useContext, useEffect, useRef, useState } from "react";
import { Container, LowerNavBar, TopNavBar, UpperNavBar, TheDashBoard } from "./Dashboard.styled";
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
  const { token, isCompleted, url, candidate } = ctx;

  const expiryTimeStamp = useRef(new Date(0));

  const clickHandler = (arg: string) => {
    nav(arg);
  };

  useEffect(() => {
    // console.log("token", token);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    fetch(`${url}/assessment`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setData({ ...result });
        expiryTimeStamp.current.setUTCSeconds(result.exp);
        console.log("Expiry time epoch", result.exp);
        console.log("DATE", expiryTimeStamp);
        setExpTime(expiryTimeStamp.current);
        sessionStorage.setItem("expTime", expiryTimeStamp.current.toUTCString());
      })
      .catch((error) => console.log("error", error));
  }, [token, url]);

  useEffect(() => {
    const keys = Object.values(isCompleted);
    let navigateToHome = true;
    for (let y = 0; y < keys.length; y++) {
      if (keys[y] === false) navigateToHome = false;
    }
    if (navigateToHome) {
      nav("/", { replace: true });
      sessionStorage.clear();
    }
  }, [isCompleted, nav])



  return (
    <>
      {data && data.data.length > 0 && (
        <TheDashBoard>
          <TopNavBar>
            <UpperNavBar>
              <img src="/images/logo.png" alt="iwebcode" />
              <div className="right">
                               
                <div className="avatar">
                  {candidate.name[0]}
                </div>
                <span>{candidate.name}</span> 
              </div>
            </UpperNavBar>
            <LowerNavBar>
              <div className="dashboard-wrapper">
                <div className="dashboard" >
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8j4zn5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeOutlineIcon"><path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"></path></svg>
                  <span>Dashboard</span>
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-auzavg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronDownIcon"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>

                </div>
                
                <ul className="list">
                  <li className="first" onClick={() =>clickHandler(slugify(data.data[0].title).toLowerCase())}>{data.data[0].title}</li>
                  <li onClick={() =>clickHandler(slugify(data.data[1].title).toLowerCase())}>{data.data[1].title}</li>
                  <li onClick={() =>clickHandler(slugify(data.data[2].title).toLowerCase())}>{data.data[2].title}</li>
                  <li onClick={() =>clickHandler(slugify(data.data[3].title).toLowerCase())}>{data.data[3].title}</li>
                  <li onClick={() =>clickHandler(slugify(data.data[4].title).toLowerCase())}>{data.data[4].title}</li>
                  <li className="last" onClick={() =>clickHandler(slugify(data.data[5].title).toLowerCase())}>{data.data[5].title}</li>
                </ul>
              </div>

              {expTime && <MyTimer time={expTime} />}
            </LowerNavBar>
          </TopNavBar>


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
        </TheDashBoard>
      )}
    </>
  );
};

export default DashBoard;
