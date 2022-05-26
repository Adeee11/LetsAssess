import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  user-select: none;
  background-color: ${({ theme }) => theme.pellete.primary};
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex-basis: 50%;
  overflow-y: scroll;
  @media (max-width: 900px) {
    flex-basis: 100%;
    overflow-y: visible;
  }
  .logo,
  .subject,
  .description {
    margin-left: 50px;
    @media (max-width: 414px) {
      margin-left: 20px;
    }
  }
  .logo {
    font-weight: 700;
    font-size: 18px;
    padding-top: 20px;
    padding-bottom: 40px;
  }
  .subject {
    font-size: 16px;
    color: gray;
    font-weight: 700;
  }
  .description {
    font-size: 16px;
    color: gray;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 0 40px;
    p {
      margin-bottom: 0;
    }
    .next {
      font-size: 16px;
      padding: 6px 10px;
      background: ${({ theme }) => theme.pellete.main};
      color: ${({ theme }) => theme.pellete.primary};
      border-radius: 4px;
      min-width: 126px;
      cursor: pointer;
      border: none;
      @media (max-width: 900px) {
        position: absolute;
        top: 116px;
        right: 50px;
      }
      @media (max-width: 414px) {
        right: 20px;
      }
    }
    .next:disabled {
      cursor: unset;
      background: linear-gradient(
        98deg,
        rgb(202, 180, 241),
        rgb(202, 195, 214) 94%
      );
    }
  }
`;

const Question = styled.div`
  margin-left: 50px;
  color: black;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  /* border: 1px solid ${({ theme }) => theme.pellete.purple}; */
  padding: 4px;
  width: 85%;
  @media (max-width: 900px) {
    flex-basis: 100%;
    margin: 20px auto;
    margin-left: 50px;
  }
  @media (max-width: 414px) {
    margin-left: 20px;
  }
`;
const QuestionCode = styled.div`
  margin: 20px 0 20px 50px;
  margin-left: 50px;
  color: black;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px dotted rgb(145, 85, 253);
  padding: 0px;
  width: 85%;
  /* background:lightgray; */
  border-radius: 4px;
  /* overflow-x: auto; */
  @media (max-width: 900px) {
    flex-basis: 100%;
    margin: 20px auto;
  }
  pre {
    max-width: 100%;
    margin: 0;
    padding: 10px;
  }
  code {
    /* font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace; */
  }
`;
const Timer = styled.div`
  @media (max-width: 900px) {
    position: absolute;
    top: 31px;
    right: 50px;
  }
  @media (max-width: 414px) {
    right: 20px;
  }
`;

const Section = styled.div`
  .act {
    color: black;
    border: 3px solid rgb(145, 85, 253);
    .sn {
      color: rgb(145, 85, 253);
    }
  }
`;
const Option = styled.div`
  box-sizing: border-box;
  width: 70%;
  margin: 0 auto;
  border: 1px solid rgb(198, 167, 254);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  cursor: pointer;

  span {
    color: black;
    font-size: 14px;
  }
  .sn {
    font-size: 2rem;
    font-weight: 700;
    color: gray;
    padding-left: 10px;
  }
  &:hover {
    border: 3px solid rgb(145, 85, 253);
    :first-child {
      color: black;
    }
    .sn {
      /* color:gray; */
    }
  }
`;
const OptionCode = styled.div`
  /* text-align: left; */
  margin: 0;
  padding: 0;
  font-size: 14px;
  display: inline-block;
  /* background-color:lightgray; */
  color: black;
  /* padding: 10px; */
  width: 100%;
  overflow-x: auto;
  border-radius: 4px;
`;

export {
  Container,
  Column,
  Question,
  Timer,
  Section,
  Option,
  QuestionCode,
  OptionCode,
};
