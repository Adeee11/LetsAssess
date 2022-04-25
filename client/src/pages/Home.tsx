import React, { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../App";
import Spinner from "../components/Spinner/Spinner";
import { Container } from "./Home.Styled";

const Home = () => {
  const nav = useNavigate();
  const ctx = useContext<any>(GlobalContext);
  const [showLoader, setShowLoader] = useState(false);
  const setToken = ctx.setToken;
  const token = ctx.token;
  const [data, setData] =useState('');
 
 
  const submit = async (e:FormEvent) => {
      e.preventDefault();
    setShowLoader(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: ctx.candidate.email,
      candidateName: ctx.candidate.name,
    });

    const res = await fetch("http://localhost:9000/candidate", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    });
   

    res.status === 200 &&
      fetch("http://localhost:9000/authenticate", {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setToken(result.token);
          
          nav("/assessment");
        })
        .catch((error) => console.log("error", error));
        
      if(res.ok===false){
        setShowLoader(false);
        alert("Invalid credentials/ or user already entered the test")  
      } 
       
     
  };

  // console.log({"a":data});
  return (
    <>
      {!showLoader &&
      <Container onSubmit={(e)=>submit(e)}>
        <div className="input-box">
          <span>Email</span>
          <input
            type="email"
            onChange={(e) => ctx.saveCandidateEmail(e.target.value)}
            required
          />
        </div>

        <pre></pre>
        <div className="input-box">
          <span>Name</span>
          <input
            type="text"
            onChange={(e) => ctx.saveCandidateName(e.target.value)}
            required
          />
        </div>
        <button >Submit</button>
      </Container>}
      {/* <textarea onChange={(e)=>setData(e.target.value)} value={data}>

    </textarea> */}

    {showLoader &&<Spinner/>}
    </>
  );
};

export default Home;
