import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/card";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import { GlobalContext } from "../../../GlobalContext/GlobalContextProvider";
import { Container} from "./Dashboard.styled";

const user = "Admin";

const Dashboard = () => {
  const [allCandidates, setAllCandidates] = useState([
    {
      candidateName: "",
      email: "",
      testsTaken:[
        {
          marksObtained:0
        }
      ]
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
        console.log("result",result);
        setAllCandidates(result.data);
      })
      .catch((error) => console.log("error", error));

    return () => { };
  }, [url]);

 const addMarks=(arr:{marksObtained:number}[])=>{
   let sum=0;
   for(let i=0; i<arr.length; i++){
     sum= sum+arr[i].marksObtained;  
   }
   return sum
 }

  return (
    <>

      <Header info="All Candidates" user={user} />
      <Container >
        <div className="container pb-4" >
          <div className="row justify-content-start text-center " >
            {
              allCandidates.map((candidate) => (
                <div className=" col-sm-12  col-md-6 col-lg-4 pt-4" key={candidate.email} >
                  <Card 
                  clickHandler={()=>clickHandler(candidate.email, candidate.candidateName)}
                  isFlex={true}
                  email={candidate.email}
                  name={candidate.candidateName}
                  allMarks={addMarks(candidate.testsTaken)}
                  />
                
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


