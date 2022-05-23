import { useContext, useEffect, useState } from "react";
import { CustomComponent } from "../../../components/CustomComponent";
import { GlobalContext } from "../../../GlobalContext/GlobalContextProvider";
import {
  Container,
  Card,
  Header,
  CandidateDetails,
  Question,
  Option,
  Submissions,
} from "./Dashboard.styled";

const user = "Admin";

const Dashboard = () => {
  const [show, setShow] = useState({
    showAllCandidates: true,
    showAllTest: false,
    showSubmission: false,
  });

  const [candidate, setCandidate] = useState({
    name: "",
    email: "",
  });

  const [allCandidates, setAllCandidates] = useState([
    {
      candidateName: "",
      email: "",
    },
  ]);

  const [data, setData] = useState<any>(null);
  const [candidateData, setCandidateData] = useState<
    { marksObtained: number; assessmentId: string }[] | null
  >(null);
  const [title, setTitle] = useState("");
  const [marks, setMarks] = useState(0);
  const [optionsMarked, setOptionsMarked] = useState<any>(null);

  const ctx = useContext(GlobalContext);
  const { url } = ctx;

  const clickHandler = (candidate: {
    candidateName: string;
    email: string;
  }) => {
    setShow({
      showSubmission: false,
      showAllTest: true,
      showAllCandidates: false,
    });
    setCandidate({ name: candidate.candidateName, email: candidate.email });

    fetch(`${url}/candidate/${candidate.email}/assessments`, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCandidateData(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  const showPaper = async (title: string, mark: number) => {
    await fetch(`${url}/user/${title}/questions`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setMarks(mark);
        setTitle(title);
        setShow({
          showAllTest: false,
          showAllCandidates: false,
          showSubmission: true,
        });
        setData({ ...result });
      })
      .catch((error) => console.log("error", error));

    await fetch(`${url}/user/options-marked/${title}/${candidate.email}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setOptionsMarked(result.optionsMarked);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(`${url}/user/candidates`, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setAllCandidates(result.data);
      })
      .catch((error) => console.log("error", error));

    return () => {};
  }, [url]);

  const imageSrc = (title: string) => {
    if (title === "javascript") return "/images/js.png";
    else if (title === "html-and-css") return "/images/html.png";
    else if (title === "typescript") return "/images/ts.svg";
    else if (title === "node-js") return "/images/node.png";
    else if (title === "react") return "/images/react.png";
    else if (title === "git") return "/images/git.png";
  };

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
      <Header>
        {show.showAllTest && (
          <li>
            <span
              onClick={() =>
                setShow({
                  showSubmission: false,
                  showAllTest: false,
                  showAllCandidates: true,
                })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </span>
          </li>
        )}
        {show.showSubmission && (
          <li>
            <span
              onClick={() =>
                setShow({
                  showSubmission: false,
                  showAllTest: true,
                  showAllCandidates: false,
                })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </span>
          </li>
        )}
        <li>
          {show.showAllCandidates && "All Candidates"}
          {show.showAllTest && "All Tests"}
          {show.showSubmission && `Submission of ${title}`}
        </li>

        <li className="avatar">{user[0]}</li>
      </Header>
      <Container>
        {show.showAllCandidates &&
          allCandidates.map((candidate) => (
            <Card key={candidate.email} onClick={() => clickHandler(candidate)}>
              <span>{candidate.candidateName}</span>
              <span>{candidate.email}</span>
            </Card>
          ))}
      </Container>
      {(show.showAllTest || show.showSubmission) && (
        <CandidateDetails>
          <span>
            <b>Candidate : </b>
            {candidate.name}
          </span>
          <span>
            <b>Email : </b>
            {candidate.email}
          </span>
        </CandidateDetails>
      )}
      <Container>
        {show.showAllTest &&
          candidateData &&
          candidateData.map((test) => (
            <Card
              key={test.assessmentId}
              onClick={() => showPaper(test.assessmentId, test.marksObtained)}
            >
              <img src={imageSrc(test.assessmentId)} alt="Subject" />
              <span>
                <b>Marks:</b>
                {test.marksObtained}
              </span>
              <span>{test.assessmentId}</span>
            </Card>
          ))}
      </Container>

      {show.showSubmission && data && optionsMarked && (
        <Submissions>
          <p className="marks">{`${marks}/${data.questions.length}`}</p>
          {data.questions.map((item: any, index: number) => (
            <div className="section" key={item.quesId}>
              <Question>
                <span>{item.quesId}.</span>
                {item.quesValue}
                {/* {arrayEquals( item.correctOption, optionsMarked[(index+1).toString()])} */}
                {arrayEquals(
                  item.correctOption,
                  optionsMarked[(index + 1).toString()]
                ) ? (
                  <span className="marks-right">&#10003;</span>
                ) : (
                  <span className="marks-wrong">&#10060;</span>
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
                    {optionsMarked.length > parseInt(item.quesId) &&
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
                ))}

              {item.quesType === "mcq-m" &&
                item.options.map((opt: any, i: number) => (
                  <div key={opt.optionId}>
                    {optionsMarked[item.quesId][i] && (
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
            </div>
          ))}
        </Submissions>
      )}
    </>
  );
};

export default Dashboard;
