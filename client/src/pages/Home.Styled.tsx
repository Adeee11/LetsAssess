import styled from "styled-components";

const LogoConatiner = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  max-width: 200px;
  height: fit-content;
  background: white;

  img {
    width: 100%;
    height: auto;
  }
  @media (min-width: 768px) {
    background: transparent;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Form = styled.form`
  max-width: 400px;
  padding: 0 20px;
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 30%;
  }

  button {
    background: #946bfd;
    margin: 20px 0;
    box-shadow: rgb(58 53 65 / 42%) 0px 4px 8px -4px;
    width: 100%;
    text-align: center;
    font-size: 15px;
    padding: 8.5px 26px;
  }

  .input-box {
    width: 100%;
    margin-bottom: 30px;
    margin-top: 30px;
  }
`;
const Wrapper = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
 
`;

const ImageContainer = styled.div`
  width: 70%;
  display: none;
  background: #f4f5fa;
  overflow: hidden;
  @media (min-width: 768px) {
    display: flex;
  }
  img {
    margin: 0 auto;
    margin-top: 100px;
    width: 59%;
    height: auto;
  }
`;

export { Container, Form, LogoConatiner, Wrapper, ImageContainer };
