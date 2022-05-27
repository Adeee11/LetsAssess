import { useContext, useEffect, useRef, useState } from "react";
import {
  LowerNavBar,
  TopNavBar,
  UpperNavBar,
  TheDashBoard,
} from "./Dashboard.styled";
import { useNavigate } from "react-router-dom";
import { MyTimer } from "../MyTimer";
import { CardComponent } from "../CardComponent";
import slugify from "slugify";
import { GlobalContext } from "../../GlobalContext/GlobalContextProvider";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Instructions from "../Instructions/Instructions";

const DashBoard = () => {
  const [data, setData] =
    useState<{
      data: { durationInMins: number; title: string }[];
      iat: number;
      exp: number;
    }>();

  const [expTime, setExpTime] = useState<any>();

  const a = sessionStorage.getItem("i");
  const [showNotInstructions, setShowNotInstructions] = useState(a);

  const notShowInstructions = () => {
    sessionStorage.setItem("i", "no");
    setShowNotInstructions("no");
  };

  const nav = useNavigate();
            
  const ctx = useContext(GlobalContext);
  const { token, isCompleted, url, candidate, logout } = ctx;

  const expiryTimeStamp = useRef(new Date(0));

  const clickHandler = (arg: string) => {
    nav(`/assessment/${arg}`, { replace : true } );
    fullscreen();
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
        // console.log("Expiry time epoch", result.exp);
        // console.log("DATE", expiryTimeStamp);
        setExpTime(expiryTimeStamp.current);
        sessionStorage.setItem(
          "expTime",
          expiryTimeStamp.current.toUTCString()
        );
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
      nav("/", { replace : true });
      //need to fix dependency array for logout.
      logout();
      sessionStorage.clear();
    }
  }, [isCompleted, nav, logout]);

  const fullscreen = () => {
    let elem: any = document.getElementById("root");
    if (elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    }
  };

  return (
    <>
    
      {data && data.data.length > 0 && (
        <TheDashBoard className="the-dashboard">
          <TopNavBar>
            <div className="container-fluid border-bottom">
              <div className="container">
                <UpperNavBar>
                  <img src="/images/logo.png" alt="iwebcode" />
                  <div className="right">
                    <div className="avatar">{candidate.name[0]}</div>
                    <span>{candidate.name}</span>
                  </div>
                </UpperNavBar>
              </div>
            </div>
            <div className="container-fluid boxshadow">
              <div className="container">
                <LowerNavBar>
                  <div className="dashboard-wrapper">
                    <div className="dashboard">
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8j4zn5"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="HomeOutlineIcon"
                      >
                        <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"></path>
                      </svg>
                      <span>Dashboard</span>
                    </div>
                  </div>

                  {expTime && <MyTimer time={expTime} />}
                </LowerNavBar>
              </div>
            </div>
          </TopNavBar>
          {!showNotInstructions && (
            <Instructions onClose={() => notShowInstructions()} />
          )}

          <MyContainer>
            {showNotInstructions === "no" && (
              <div className="container">
                <div className="row justify-content-between text-center py-4">
                  <div className=" col-sm-12  col-md-6 col-lg-4 my-4 ">
                    <CardComponent
                      key={data.data[0].title}
                      title={data.data[0].title}
                      durationInMins={data.data[0].durationInMins}
                      isCompleted={
                        isCompleted[
                          data.data[0].title.replace(/\s+/g, "-").toLowerCase()
                        ]
                      }
                      clickHandler={() =>
                        clickHandler(slugify(data.data[0].title).toLowerCase())
                      }
                    />
                  </div>

                  <div className=" col-sm-12  col-md-6 col-lg-4 mx-auto my-4">
                    <CardComponent
                      key={data.data[1].title}
                      title={data.data[1].title}
                      durationInMins={data.data[1].durationInMins}
                      isCompleted={
                        isCompleted[
                          data.data[1].title.replace(/\s+/g, "-").toLowerCase()
                        ]
                      }
                      clickHandler={() =>
                        clickHandler(slugify(data.data[1].title).toLowerCase())
                      }
                    />
                  </div>

                  <div className=" col-sm-12  col-md-6 col-lg-4 mx-auto my-4">
                    <CardComponent
                      key={data.data[2].title}
                      title={data.data[2].title}
                      durationInMins={data.data[2].durationInMins}
                      isCompleted={
                        isCompleted[
                          data.data[2].title.replace(/\s+/g, "-").toLowerCase()
                        ]
                      }
                      clickHandler={() =>
                        clickHandler(slugify(data.data[2].title).toLowerCase())
                      }
                    />
                  </div>
                  <div className=" col-sm-12  col-md-6 col-lg-4 my-4">
                    <CardComponent
                      key={data.data[3].title}
                      title={data.data[3].title}
                      durationInMins={data.data[3].durationInMins}
                      isCompleted={
                        isCompleted[
                          data.data[3].title.replace(/\s+/g, "-").toLowerCase()
                        ]
                      }
                      clickHandler={() =>
                        clickHandler(slugify(data.data[3].title).toLowerCase())
                      }
                    />
                  </div>
                  <div className=" col-sm-12  col-md-6 col-lg-4  my-4">
                    <CardComponent
                      key={data.data[4].title}
                      title={data.data[4].title}
                      durationInMins={data.data[4].durationInMins}
                      isCompleted={
                        isCompleted[
                          data.data[4].title.replace(/\s+/g, "-").toLowerCase()
                        ]
                      }
                      clickHandler={() =>
                        clickHandler(slugify(data.data[4].title).toLowerCase())
                      }
                    />
                  </div>
                  <div className=" col-sm-12  col-md-6 col-lg-4 my-4">
                    <CardComponent
                      key={data.data[5].title}
                      title={data.data[5].title}
                      durationInMins={data.data[5].durationInMins}
                      isCompleted={
                        isCompleted[
                          data.data[5].title.replace(/\s+/g, "-").toLowerCase()
                        ]
                      }
                      clickHandler={() =>
                        clickHandler(slugify(data.data[5].title).toLowerCase())
                      }
                    />
                  </div>
                </div>
              </div>
            )}
          </MyContainer>

          <Footer />
        </TheDashBoard>
      )}

      {!data && <WhiteScreen></WhiteScreen>}
      
    </>
  );
};

export default DashBoard;

const MyContainer = styled.div`
  margin-top: 125px;
  /* min-height: calc(100vh - 125px); */
  overflow-y: auto; 
 
 
  /* &:fullscreen{
    height: 100vh;
    overflow-y: scroll;
    
  }    */
`;

const WhiteScreen = styled.div`
  background-color: ${({ theme }) => theme.pellete.primary};
  min-height: 100vh;
`;

