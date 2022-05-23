import { FormEvent,  useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button";
import Footer from "../components/Footer/Footer";
import Input from "../components/Input/Input";
import { MessageBox } from "../components/MessageBox";
import Spinner from "../components/Spinner/Spinner";
import { GlobalContext } from "../GlobalContext/GlobalContextProvider";
import { Container } from "./Home.Styled";

const Home = () => {
  const [showMsg, setShowMsg] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const nav = useNavigate();
  const ctx = useContext<any>(GlobalContext);
  const { setToken, url, isCompleted, saveIsCompleted} = ctx;

  const submit = async (e: FormEvent) => {
    
    e.preventDefault();
    setShowLoader(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: ctx.candidate.email,
      candidateName: ctx.candidate.name,
    });

    const res = await fetch(`${url}/candidate`, {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    });

    res.status === 200 &&
      fetch(`${url}/authenticate`, {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      })
        .then((response) => response.json())
        .then(async (result) => {
          console.log(result);
          setToken(result.token);

          nav("/assessment", { replace: true });
        })
        .catch((error) => console.log("error", error));

    if (res.ok === false) {
      setShowLoader(false);
      alert("Invalid credentials/ or user already entered the test");
    }
  };
  
  useEffect(() => {
    if (
      isCompleted["html-and-css"] &&
      isCompleted["javascript"] &&
      isCompleted["node-js"] &&
      isCompleted["react"] &&
      isCompleted["typescript"] &&
      isCompleted["git"]
    ){
      setShowMsg(true);
      saveIsCompleted({
        "html-and-css": false,
        javascript: false,
        typescript: false,
        react: false,
        "node-js": false,
        git: false,
      });
    }
  }, [isCompleted, saveIsCompleted]);

 
  
  return (
    <>
    <TheHome>
      {!showLoader && (
       
        <Container onSubmit={(e) => submit(e)}>
          <div className="input-box">
            <span>Email</span>
            <Input
              type="email"
              changeHandler={(i) => ctx.saveCandidateEmail(i)}
            />
          </div>

          <div className="input-box">
            <span>Name</span>
            <Input
              type="text"
              changeHandler={(i) => ctx.saveCandidateName(i)}
            />
          </div>
          <Button type="submit" value="submit" />
        </Container>
      )}
        
      {showLoader && <Spinner />}
      {showMsg && (
        <MessageBox
          msg={`Completed all the tests.`}
          clickHandler={() => setShowMsg(false)}
        />
      )}


      </TheHome>
      <Footer/>      
    </>
  );
};

export default Home;


const TheHome =styled.div`
  min-height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`
