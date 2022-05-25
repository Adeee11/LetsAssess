import React from "react";
import styled from "styled-components";

type propType = {
  onClose: () => void;
};

const Instructions = ({ onClose }: propType) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <InstructionsWrapper>
            <h3>Instructions</h3>
            <ol>
              <li>
                Each candidate would get only one try to attempt the assessment.
                So don’t close the tab or log out from the session.
              </li>
              <li>All questions are compulsory.</li>
              <li>
                Each candidate would get 2hrs 10 mins to complete the test. 10
                mins are provided for reading the instructions.
              </li>
              <li>
                You are allowed to submit the answer to a question only once, so
                make sure before marking the answer. You can’t change the answer
                after submitting it.
              </li>
              <li>
                There are two types of questions:
                <ol className="sub-list">
                  <li>
                    Single Correct answer - Only one option is the correct
                    answer
                  </li>
                  <li>
                    Multiple Correct Answer - One or more than one option may be
                    the correct answer
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                Finish the test before the timer runs out. After the timer runs
                out the candidate wouldn’t be able to give the test
              </li>
            </ol>
            <button onClick={() => onClose()}>Start</button>
          </InstructionsWrapper>
        </div>
      </div>
    </div>
  );
};

export default Instructions;

const InstructionsWrapper = styled.div`
  h3 {
    text-align: center;
  }
  margin-top: 125px;
  background-color: ${({ theme }) => theme.pellete.primary};
  color: ${({ theme }) => theme.pellete.secondary};
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  ol{
      list-style: lower-alpha;
      .sub-list{
          list-style: decimal;
      }
  }
  li {
    padding: 5px;
  }
  button {
    background-image: ${({ theme }) => theme.pellete.main};
    color: ${({ theme }) => theme.pellete.primary};
    margin: 0 auto;
    display: block;
    padding: 6px 25px;
    border-radius: 4px;
    border: none;
  }
`;
