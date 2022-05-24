import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext/GlobalContextProvider";
import { Typography } from "@mui/material";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import assessmentImage from "../../assets/assessment-9.png";

import Spinner from "../../components/Spinner/Spinner";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Form, LogoConatiner, ImageContainer } from "../Home.Styled";

interface Inputs {
  email?: string;
  password?: string;
}

const User = () => {
  const nav = useNavigate();
  const ctx = useContext(GlobalContext);
  const { saveAdmin, discardAdmin, url } = ctx;
  const [showLoader, setShowLoader] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setShowLoader(true);
    try {
      const response = await fetch(`${url}/authenticate/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        redirect: "follow",
      });

      if (response.status !== 200) {
        alert("Couldn't log in");
        setShowLoader(false);
      } else {
        setIsLoggedIn(true);
        saveAdmin();
        nav("dashboard", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !isLoggedIn && discardAdmin();
  }, [discardAdmin,isLoggedIn]);
  return (
    <>
      {showLoader ? (
        <Spinner />
      ) : (
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
                id={"outlined-basic"}
                label="Email"
                type="email"
                register={register}
                registerValue={"email"}
              />
            </div>

            <div className="input-box">
              <Input
                id={"outlined-password"}
                label="Password"
                type="password"
                register={register}
                registerValue={"password"}
              />
            </div>
            <Button type="submit" value="LOGIN" />
          </Form>
        </Container>
      )}
    </>
  );
};

export default User;
