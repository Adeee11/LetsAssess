import { Typography } from "@mui/material";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import Input from "../components/Input/Input";
import { MessageBox } from "../components/MessageBox";
import Spinner from "../components/Spinner/Spinner";
import { GlobalContext } from "../GlobalContext/GlobalContextProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import assessmentImage from "../assets/assessment-2.jpg";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Container,
  Wrapper,
  Form,
  LogoConatiner,
  ImageContainer,
} from "./Home.Styled";

interface Inputs {
  email: string;
  name: string;
}

const Home = () => {
  const [showMsg, setShowMsg] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const nav = useNavigate();
  const ctx = useContext<any>(GlobalContext);
  const { setToken, url, isCompleted, saveIsCompleted } = ctx;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    ctx.candidate.email = data.email;
    ctx.candidate.name = data.name;
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

  // const submit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   setShowLoader(true);
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     email: ctx.candidate.email,
  //     candidateName: ctx.candidate.name,
  //   });

  //   const res = await fetch(`${url}/candidate`, {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   });

  //   res.status === 200 &&
  //     fetch(`${url}/authenticate`, {
  //       method: "POST",
  //       headers: myHeaders,
  //       body: raw,
  //       redirect: "follow",
  //     })
  //       .then((response) => response.json())
  //       .then(async (result) => {
  //         console.log(result);
  //         setToken(result.token);

  //         nav("/assessment", { replace: true });
  //       })
  //       .catch((error) => console.log("error", error));

  //   if (res.ok === false) {
  //     setShowLoader(false);
  //     alert("Invalid credentials/ or user already entered the test");
  //   }
  // };

  useEffect(() => {
    if (
      isCompleted["html-and-css"] &&
      isCompleted["javascript"] &&
      isCompleted["node-js"] &&
      isCompleted["react"] &&
      isCompleted["typescript"] &&
      isCompleted["git"]
    ) {
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
    <Wrapper className="wrapper">
      {!showLoader && (
        <Container className="container-s">
          <LogoConatiner>
            <img src="images/logo.png" alt="IWEBCODE" />
          </LogoConatiner>
          <ImageContainer>
            <img src={assessmentImage} alt="Assessment" />
          </ImageContainer>
          <Form onSubmit={handleSubmit(onSubmit)} className={"Form"}>
            <Typography
              variant="h5"
              component={"h1"}
              paddingLeft={"10px"}
              paddingBottom={"3px"}
            >
              Welcome to LetAssess
            </Typography>
            <Typography
              variant="body2"
              component={"h2"}
              paddingLeft={"10px"}
              marginBottom={"20px"}
            >
              Please fill in the details to start the assessment
            </Typography>
            <div className="input-box">
              <Input
                label="Email"
                type="email"
                register={register}
                registerValue={"email"}
              />
            </div>

            <div className="input-box">
              <Input
                label="Name"
                type="text"
                register={register}
                registerValue={"email"}
              />
            </div>
            <Button type="submit" value="LOGIN" />
          </Form>
        </Container>
      )}
      {showLoader && <Spinner />}
      {showMsg && (
        <MessageBox
          msg={`Completed all the tests.`}
          clickHandler={() => setShowMsg(false)}
        />
      )}
    </Wrapper>
  );
};

export default Home;
