import React, { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../App";
import {Button} from "../components/Button";
import Input from "../components/Input/Input";
import { MessageBox } from "../components/MessageBox";
import Spinner from "../components/Spinner/Spinner";
import { Container } from "./Home.Styled";

const Home = () => {
  const nav = useNavigate();
  const ctx = useContext<any>(GlobalContext);
  const [showLoader, setShowLoader] = useState(false);
  const setToken = ctx.setToken;
  const url = ctx.url;
  const token = ctx.token;
  const candidate = ctx.candidate;
  const isCompleted = ctx.isCompleted;
  const saveIsCompleted = ctx.setIsCompleted;
  const [data, setData] = useState('');
  const [showMsg, setShowMsg] = useState(false);


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
        .then((result) => {
          console.log(result);
          setToken(result.token);

          nav("/assessment", { replace: true });
        })
        .catch((error) => console.log("error", error));

    if (res.ok === false) {
      setShowLoader(false);
      alert("Invalid credentials/ or user already entered the test")
    }


  };
  console.log(isCompleted)

  useEffect(() => {
    sessionStorage.clear();
    saveIsCompleted(
      {
        "html-and-css": false,
        "javascript": false,
        "typescript": false,
        "react": false,
        "node-js": false,
        "git": false,
      }
    )

  }, [])

  useEffect(() => {
    if (isCompleted["html-and-css"] && isCompleted["javascript"] && isCompleted["node-js"] && isCompleted["react"] && isCompleted["typescript"] && isCompleted["git"])
      setShowMsg(true);
  }, [])
  console.log(candidate)
  // console.log({"a":data});
  return (
    <>
      {!showLoader &&
        <Container onSubmit={(e) => submit(e)}>
          <div className="input-box">
            <span>Email</span>
            <Input
              type="email"
              changeHandler={(i) => ctx.saveCandidateEmail(i)} />
          </div>

          
          <div className="input-box">
            <span>Name</span>
            <Input
              type="text"
              changeHandler={(i) => ctx.saveCandidateName(i)} />
          </div>
          <Button
            type="submit"
            value="submit"
          />
        </Container>}


      {showLoader && <Spinner />}
      {showMsg &&
        <MessageBox
          msg={`Completed all the tests`}
          clickHandler={() => setShowMsg(false)}
        />
      }
    </>
  );
};

export default Home;
