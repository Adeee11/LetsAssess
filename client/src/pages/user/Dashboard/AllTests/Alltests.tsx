import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../../../components/card";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import { GlobalContext } from "../../../../GlobalContext/GlobalContextProvider";
import {  Container } from "../Dashboard.styled";



const Alltests = () => {
  const [candidateData, setCandidateData] =
    useState<{ marksObtained: number; assessmentId: string }[] | null>(null);
  const ctx = useContext(GlobalContext);
  const { url } = ctx;
  const user = "Admin";
  const nav = useNavigate();

  const { email } = useParams();

  useEffect(() => {
    fetch(`${url}/candidate/${email}/assessments`, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCandidateData(result.data);
        if (result.msg) {
          alert(result.msg);
          nav(-1);
        }
      })
      .catch((error) => console.log("error", error));
  }, [email, url, nav]);

  const clickHandler = (i: string, marks: number) => {
    nav(i);
    localStorage.setItem("marks", marks.toString());
  };
  return (
    <>
      <Header
        user={user}
        info="All Tests"
        onClick={() => nav("/user/dashboard", { replace: true })}
      />
      <Container>
        <div className="container pb-4">
          <div className="row justify-content-start text-center ">
            {candidateData &&
              candidateData.map((test) => (
                <div
                  className=" col-sm-12  col-md-6 col-lg-4 pt-4"
                  key={test.assessmentId}
                >
                  <Card 
                  clickHandler={()=>clickHandler(test.assessmentId, test.marksObtained)}
                  assessmentId={test.assessmentId}
                  marks={test.marksObtained}/>       
                </div>
              ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Alltests;
