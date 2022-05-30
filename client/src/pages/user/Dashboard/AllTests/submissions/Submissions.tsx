import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomComponent } from "../../../../../components/CustomComponent";
import Footer from "../../../../../components/Footer/Footer";
import Header from "../../../../../components/Header/Header";
import { GlobalContext } from "../../../../../GlobalContext/GlobalContextProvider";
import {
  Container,
  CorrectOption,
  Option,
  Question,
  Submissions as Sub,
} from "../../Dashboard.styled";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

const Content = ({
  marks,
  totalMarks,
}: {
  marks?: string | null;
  totalMarks?: number;
}) => {
  let inCorrectQuestions: any;
  inCorrectQuestions =
    marks && totalMarks ? totalMarks - parseInt(marks) : "couldn't calculate";
  return (
    <>
      <div className="row">
        <span className="marks">{`Marks Obtained: ${marks}/${totalMarks}`}</span>
      </div>
      <div className="row">
        <div className="col">
          <span className="marks">{`Correct : ${marks}`}</span>
        </div>
        <div className="col">
          <span className="marks">{`Incorrect : ${inCorrectQuestions}`}</span>
        </div>
      </div>
    </>
  );
};
const Submissions = () => {
  const [data, setData] = useState<any>(null);
  const [optionsMarked, setOptionsMarked] = useState<any>(null);
  const ctx = useContext(GlobalContext);
  const { url } = ctx;
  const { email, title = "" } = useParams();
  const marks = localStorage.getItem("marks");
  const nav = useNavigate();

  useEffect(() => {
    const showPaper = async (title: string, mark: number) => {
      await fetch(`${url}/user/${title}/questions`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setData({ ...result });
        })
        .catch((error) => console.log("error", error));

      await fetch(`${url}/user/options-marked/${title}/${email}`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setOptionsMarked(result.optionsMarked);
        })
        .catch((error) => console.log("error", error));
    };

    showPaper(title, 1);
  }, [title, email, url]);

  const arrayEquals = (a: any, b: any) => {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  };

  return (
    <>
      <Header
        user="Admin"
        info={"TOPIC: " + title}
        onClick={() => nav("/user/dashboard", { replace: true })}
      // content={<Content marks={marks} totalMarks={data && data.questions.length} />}
      />
      <Container>
        {data && optionsMarked && (
          <Sub className="container">
            {/* <p className="marks">{`Marks Obtained: ${marks}/${data.questions.length}`}</p> */}
            <Content marks={marks} totalMarks={data && data.questions.length} />
            {data.questions.map((item: any, index: number) => (
              <div className="section " key={item.quesId}>
                <Question>
                  <span>{item.quesId}.</span>
                  {item.quesValue}

                  {optionsMarked[index] &&
                    arrayEquals(
                      item.correctOption,
                      optionsMarked[index].answers
                    ) ? (
                    <span className="marks-right">
                      <TiTick />
                    </span>
                  ) : (
                    <span className="marks-wrong">
                      <ImCross />
                    </span>
                  )}
                </Question>

                {item.useCustomComponent && (
                  <Question>
                    <CustomComponent data={item.props} />
                  </Question>
                )}

                {item.quesType === "mcq" &&
                  item.options.map((opt: any) => (
                    <div key={opt.optionId}>
                      {optionsMarked.length >= parseInt(item.quesId) &&
                        optionsMarked[parseInt(item.quesId) - 1].answers[0] ===
                        opt.optionId && (
                          <Option>
                            <span>{opt.optionId}.</span>
                            {!opt.useCustomComponent && opt.optionValue}
                            {opt.useCustomComponent && (
                              <CustomComponent data={opt.optionProps} />
                            )}
                          </Option>
                        )}

                    </div>
                  ))
                }

                {item.quesType === "mcq" &&
                  item.options.map((opt: any) => <div key={opt.optionId}>
                    <>

                      {opt.optionId === item.correctOption[0] &&
                        <>
                          <CorrectOption>

                            <div> {!opt.useCustomComponent && <><span>{opt.optionId}</span>{opt.optionValue}</>}</div>
                            {opt.useCustomComponent && (
                              <div className="codes">
                                <span>{opt.optionId}</span>
                                <div className="pre">
                                  <CustomComponent data={opt.optionProps} />
                                </div>
                              </div>
                            )}
                          </CorrectOption>
                        </>
                      }
                    </>
                  </div>)
                }


                {item.quesType === "mcq-m" &&
                  item.options.map((opt: any, i: number) => (
                    <div key={opt.optionId}>
                      {optionsMarked[parseInt(item.quesId) - 1].answers[i] ===
                        "true" && (
                          <Option>
                            <span>{opt.optionId}.</span>
                            {!opt.useCustomComponent && opt.optionValue}
                            {opt.useCustomComponent && (
                              <CustomComponent data={opt.optionProps} />
                            )}
                          </Option>
                        )}
                    </div>
                  ))}

                {item.quesType === "mcq-m" &&
                  item.options.map((opt: any, i: number) => (
                    <div key={opt.optionId}>
                      {(
                        <>

                          {item.correctOption[i] === "true" &&
                            <>
                              <CorrectOption>

                                <div>  {!opt.useCustomComponent &&
                                  <>
                                    <span>{opt.optionId}</span>
                                    {opt.optionValue}
                                  </>}
                                </div>
                                {opt.useCustomComponent && (
                                  <div className="codes">
                                    <span>{opt.optionId}</span>
                                    <div className="pre">
                                      <CustomComponent data={opt.optionProps} />
                                    </div>
                                  </div>
                                )}
                              </CorrectOption>
                            </>
                          }

                        </>
                      )}
                    </div>
                  ))}


              </div>
            ))}


          </Sub>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Submissions;
