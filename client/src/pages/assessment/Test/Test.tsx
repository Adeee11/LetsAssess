import React, { useContext, useEffect, useState } from "react";
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
import CustomComponent from "../../../components/CustomComponent/CustomComponent";
import { GlobalContext } from "../../../App";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import MyTimer from "../../../components/MyTimer/MyTimer";



const Test = () => {
  const [queNo, setQueNo] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string[] | any>([]);
  const [data1, setData1] = useState<any>();
  const { title = "" } = useParams();
  const nav = useNavigate();
  const ctx = useContext<any>(GlobalContext);
  const { candidate, token, isCompleted, setIsCompleted } = ctx;
  const url="http://localhost:9000";

  useEffect(() => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    fetch(`${url}/assessment/${title}/questions`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((result) => setData1(result));

    fetch(`${url}/submission/options-marked/${title}`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    })
      .then((response) =>{
        console.log(response);
      if(response.ok==true)  
      return  response.json()
      })
      .then((result) => {
        console.log("Result:",result);
        if (
          result &&
          Object.keys(result).length === 0 &&
          Object.getPrototypeOf(result) === Object.prototype
        ) {
          console.log("No object");
        } else {
          const optionsMarked = result.optionsMarked;
          console.log("Result", result);
          console.log("Option marked", optionsMarked);
          let options: any[] = [];
          const keys = Object.keys(optionsMarked);
          console.log("Keys", keys);
          keys.forEach((key) => {
            console.log("Key", key, typeof key);
            console.log("Option Marked", optionsMarked[key]);
            if (optionsMarked[key].length === 4) {
              options.push(optionsMarked[key]);
            } else {
              options.push(...optionsMarked[key]);
            }
          });

          // console.log("Options Array", options);
          setSelectedOpt([...options]);
          setQueNo(result.lastIndex + 1);
        }
      })
      .catch((error) => console.log("error:----->", error));
  }, []);

  useEffect(() => {
    window.onbeforeunload = function () {
      return "Data will be lost ";
    };
  }, []);



  const submitHandler = () => {

    isCompleted[title.replace(/\s+/g, '-').toLowerCase()] = true
    setIsCompleted(isCompleted)
    console.log("Submit Handler called");
    nav("/assessment", { replace: true });
    console.log(isCompleted);

  };



  const nextQuestion = async (
    queId: string | number,
    optionId: string | number | any[]
  ) => {

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

    fetch(`${url}/submission/answer`, {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    if (queNo < data1.questions.length - 1) {
      setQueNo(queNo + 1);

    } else {

      submitHandler();
    }
  };

  const selectOpt = (arg0: string | number) => {
    if (data1.questions[queNo].quesType == "mcq") {
      selectedOpt[queNo] = arg0;

      setSelectedOpt([...selectedOpt]);
    } else if (data1.questions[queNo].quesType == "mcq-m") {
      if (selectedOpt[queNo] == undefined) {
        selectedOpt[queNo] = [];
        selectedOpt[queNo] = data1.questions[queNo].options.map(() => false);
      }

      for (let i = 0; i < data1.questions[queNo].options.length; i++) {
        if (arg0 == data1.questions[queNo].options[i].optionId) {
          selectedOpt[queNo][i] = !selectedOpt[queNo][i];
        }
      }
      setSelectedOpt([...selectedOpt]);
    }
  };

  //  sets enable or disable next button
  const setDisable = () => {
    if (selectedOpt[queNo] == undefined) {
      return true;
    } else if (data1.questions[queNo].quesType === "mcq-m") {
      let flag = true;
      for (let i = 0; i < selectedOpt[queNo].length; i++) {
        if (selectedOpt[queNo][i] == true) flag = false;
      }
      return flag;
    } else {
      return false;
    }
  };

  // if(data1 ){
  //   let isTestCompleted=queNo == data1.questions.length - 1;
  //   isTestCompleted && nav('/assessment')
  // }
console.log(selectedOpt);

  return (
    <>
      {!data1 && <Spinner />}

      {data1 && queNo < data1.questions.length ? (
        <Container>
          <Column>
            <div className="logo">IWEBCODE</div>
            <div className="subject">{title}</div>
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
                <MyTimer time={Date.parse(sessionStorage.getItem('expTime') || "")} />
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
                        selectedOpt[queNo] && selectedOpt[queNo][index] == true
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
                      <span className="sn">{index + 1}</span>
                    </Option>
                  )}
                  {data1.questions[queNo].quesType === "mcq" && (
                    // if question type is mcq
                    <Option
                      className={
                        selectedOpt[queNo] == opt.optionId ? "act" : ""
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

                      <span className="sn">{index + 1}</span>
                    </Option>
                  )}
                </div>
              ))}
            </Section>
          </Column>
        </Container>
      ) : (
        data1 &&
        <>Test Completed</>
      )}
    </>
  );
};

export default Test;
