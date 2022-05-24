import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import { GlobalContext } from "../../../GlobalContext/GlobalContextProvider";
import { Container, Card } from "./Dashboard.styled";

const user = "Admin";

const Dashboard = () => {
  const [allCandidates, setAllCandidates] = useState([
    {
      candidateName: "",
      email: "",
    },
  ]);
  const ctx = useContext(GlobalContext);
  const { url } = ctx;
  const navigate = useNavigate();

  const clickHandler = (email: string, candidateName: string) => {
    navigate(email);
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

    return () => { };
  }, [url]);



  return (
    <>

      <Header info="All Candidates" user={user} />
      <Container >
        <div className="container pb-4" >
          <div className="row justify-content-start text-center " >
            {
              allCandidates.map((candidate) => (
                <div className=" col-sm-12  col-md-6 col-lg-4 pt-4" key={candidate.email} >
                  <Card onClick={() => clickHandler(candidate.email, candidate.candidateName)} isFlex={true}>
                    <img className="img" src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png" alt="" />
                    <div className="right">
                      <span>{candidate.candidateName}</span>
                      <span>{candidate.email}</span>
                    </div>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;


