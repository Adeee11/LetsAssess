import { useContext, useEffect, useState } from "react";
import { CustomComponent } from "../../../components/CustomComponent";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "../../../components/Spinner";
import { MyTimer } from "../../../components/MyTimer";
import {
  Column,
  Container,
  Section,
  Option,
  Question,
  Timer,
  QuestionCode,
  OptionCode,
} from "./Test.styled";
import { GlobalContext } from "../../../GlobalContext/GlobalContextProvider";

const Test = () => {
  const [queNo, setQueNo] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string[] | any>([]);
  const [data1, setData1] = useState<any>();
  const [showLoader, setShowLoader] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(true);
  const { title = "" } = useParams();

  const nav = useNavigate();

  const ctx = useContext(GlobalContext);

  const { candidate, token, isCompleted, saveIsCompleted, url } = ctx;

  const optionName = (index: number) => {
    const startValue = 65;
    return String.fromCharCode(startValue + index);
  };

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    // loading all questions
    fetch(`${url}/assessment/${title}/questions`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((result) => {
        setData1(result);
        // console.log(result);
      });

    // calling optionsMarked API
    const callOptionsApi = async () => {
      // console.log("Options Marked Api called");

      const response: Response = await fetch(
        `${url}/submission/options-marked/${title}`,
        {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        }
      );
      // console.log("response status", response.status);
      const res = await response.json();
      // console.log("res", res);
      const options: any[] = [];
      if (response.status === 200) {
        // console.log("Called succesfully");
        const optionsMarked: any[] = res.optionsMarked;
        // console.log("Options MArked", optionsMarked);
        optionsMarked.forEach((optionMarked) => {
          // question is mcq-m type
          if (optionMarked.answers.length === 4) {
            options.push(optionMarked.answers);
          } else {
            options.push(...optionMarked.answers);
          }
        });
        // console.log("Options", options);
        setSelectedOpt([...options]);
        setQueNo(optionsMarked.length);
      } else if (response.status === 400) {
        console.log(response.statusText);
      }
    };
    try {
      callOptionsApi();
    } catch (error) {
      console.log(error);
    }
  }, [title, token, url]);

  // useEffect(() => {
  //   window.onbeforeunload = function () {
  //     return "Data will be lost ";
  //   };
  // }, []);

  // const exitfullscreen = () => {
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   }
  // };

  const submitHandler = async () => {
    setShowLoader(true);
    // exitfullscreen();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: `${candidate.email}`,
      assessmentId: `${title}`,
    });

    await fetch(`${url}/candidate/marks`, {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    })
      .then((response) => {
        isCompleted[title.replace(/\s+/g, "-").toLowerCase()] = true;
        saveIsCompleted(isCompleted);
        console.log("Submit Handler called");
        nav("/assessment", { replace: true });
        // console.log(isCompleted);
        return response.json();
      })
      .then((result) => {})
      .catch((error) => {});
  };

  const nextQuestion = async (
    queId: string | number,
    optionId: string | number | any[]
  ) => {
    setShowLoader(true);
    const options = Array.isArray(optionId) ? [...optionId] : [optionId];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      assessmentId: `${title}`,
      optionMarked: {
        optionId: options,
        quesId: queId,
      },
    });

    await fetch(`${url}/submission/answer`, {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => {
        // console.log(result);
        setShowLoader(false);
      })
      .catch((error) => console.log("error", error));

    if (queNo < data1.questions.length - 1) {
      setQueNo(queNo + 1);
    } else {
      submitHandler();
    }
  };

  const selectOpt = (arg0: string | number) => {
    if (data1.questions[queNo].quesType === "mcq") {
      selectedOpt[queNo] = arg0;

      setSelectedOpt([...selectedOpt]);
    } else if (data1.questions[queNo].quesType === "mcq-m") {
      if (selectedOpt[queNo] === undefined) {
        selectedOpt[queNo] = [];
        selectedOpt[queNo] = data1.questions[queNo].options.map(() => false);
      }

      for (let i = 0; i < data1.questions[queNo].options.length; i++) {
        if (arg0 === data1.questions[queNo].options[i].optionId) {
          selectedOpt[queNo][i] = !selectedOpt[queNo][i];
        }
      }
      setSelectedOpt([...selectedOpt]);
    }
  };

  //  sets enable or disable next button
  const setDisable = () => {
    if (selectedOpt[queNo] === undefined) {
      return true;
    } else if (data1.questions[queNo].quesType === "mcq-m") {
      let flag = true;
      for (let i = 0; i < selectedOpt[queNo].length; i++) {
        if (selectedOpt[queNo][i] === true) flag = false;
      }
      return flag;
    } else {
      return false;
    }
  };

  useEffect(() => {
    // if (document.addEventListener) {
      document.addEventListener('fullscreenchange', exitHandler, false);
      document.addEventListener('mozfullscreenchange', exitHandler, false);
      document.addEventListener('MSFullscreenChange', exitHandler, false);
      document.addEventListener('webkitfullscreenchange', exitHandler, false);
    // }

    function exitHandler() {
      if (document.fullscreenElement !== null) {
        // console.log('Element has entered fullscreen mode');
      }
  else {
         setIsFullScreen(false);
        //  console.log('Element has exited fullscreen mode');
      }
    }
    return()=>{
      document.removeEventListener('fullscreenchange', exitHandler, false);
      document.removeEventListener('mozfullscreenchange', exitHandler, false);
      document.removeEventListener('MSFullscreenChange', exitHandler, false);
      document.removeEventListener('webkitfullscreenchange', exitHandler, false);
    }  
  })

  useEffect(()=>{
     if(!isFullScreen){
       nav('/assessment')
     } 
  },[isFullScreen, nav])


  return (
    <>
      {(!data1 || showLoader) && <Spinner />}
      {data1 && queNo < data1?.questions?.length && !showLoader ? (
        <Container>
          <Column>
            <div className="logo">
              <img
                src="/images/logo.png"
                alt="IWEBCODE"
                width={"130px"}
                height={"auto"}
              />
            </div>
            <div className="subject">
              {title.replaceAll("-", " ").toUpperCase()}
            </div>
            <div className="description">
              {" "}
              {`Question ${queNo + 1} of ${data1.questions.length}`}{" "}
            </div>
            <Question>{data1.questions[queNo].quesValue}</Question>

            {data1.questions[queNo].useCustomComponent === true && (
              <QuestionCode>
                <CustomComponent data={data1.questions[queNo].props} />
              </QuestionCode>
            )}
          </Column>

          <Column>
            <header>
              {data1.questions[queNo].quesType === "mcq" && (
                <p>Select one answer</p>
              )}
              {data1.questions[queNo].quesType === "mcq-m" && (
                <p>Select multiple answer</p>
              )}
              <Timer>
                <MyTimer
                  time={Date.parse(sessionStorage.getItem("expTime") || "")}
                />
              </Timer>
              <button
                className="next"
                onClick={() =>
                  nextQuestion(
                    data1.questions[queNo].quesId,
                    selectedOpt[queNo]
                  )
                }
                disabled={setDisable()}
              >
                {queNo < data1.questions.length - 1
                  ? "Next Question"
                  : "Finish"}
              </button>
            </header>
            <Section>
              {data1.questions[queNo].options.map((opt: any, index: any) => (
                <div key={opt.optionId}>
                  {/* if question type is mcq-m */}
                  {data1.questions[queNo].quesType === "mcq-m" && (
                    <Option
                      className={
                        selectedOpt[queNo] && selectedOpt[queNo][index] === true
                          ? "act"
                          : ""
                      }
                      onClick={() => selectOpt(opt.optionId)}
                    >
                      {/* <span>{opt.optionValue}</span> */}
                      {!opt.useCustomComponent && (
                        <span>{opt.optionValue}</span>
                      )}
                      {opt.useCustomComponent && (
                        <OptionCode>
                          <CustomComponent data={opt.optionProps} />
                        </OptionCode>
                      )}
                      <span className="sn">{optionName(index)}</span>
                    </Option>
                  )}
                  {data1.questions[queNo].quesType === "mcq" && (
                    // if question type is mcq
                    <Option
                      className={
                        selectedOpt[queNo] === opt.optionId ? "act" : ""
                      }
                      onClick={() => selectOpt(opt.optionId)}
                    >
                      {!opt.useCustomComponent && (
                        <span>{opt.optionValue}</span>
                      )}

                      {opt.useCustomComponent && (
                        <OptionCode>
                          <CustomComponent data={opt.optionProps} />
                        </OptionCode>
                      )}

                      <span className="sn">{optionName(index)}</span>
                    </Option>
                  )}
                </div>
              ))}
            </Section>
          </Column>
        </Container>
      ) : (
        data1 && !showLoader && <h3>Not Found</h3>
      )}
    </>
  );
};

export default Test;
