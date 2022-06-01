import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/card";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import { GlobalContext } from "../../../GlobalContext/GlobalContextProvider";
import { Container } from "./Dashboard.styled";

const user = "Admin";

const Dashboard = () => {
  const [allCandidates, setAllCandidates] = useState([
    {
      candidateName: "",
      email: "",
      testsTaken: [
        {
          marksObtained: 0
        }
      ],
      date: ""
    },
  ]);
  const [filteredCandidates, setFilteredCandidates] = useState<any>(null);
  const ctx = useContext(GlobalContext);
  const [soringOrder, setSortingOrder] = useState('ascending')

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
        console.log("result", result);
        setAllCandidates(result.data);
      })
      .catch((error) => console.log("error", error));

    return () => { };
  }, [url]);

  const addMarks = (arr: { marksObtained: number }[]) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i].marksObtained;
    }
    return sum
  }


  const sorto = (order: string) => {
    const reverse = () => {
      const arr1 = !filteredCandidates ? allCandidates : filteredCandidates;
      console.log(arr1)
      const newList = []
      for (let i = arr1.length - 1; i >= 0; i--) {
        newList.push(arr1[i])
      }
      console.log(newList)
      if (!filteredCandidates) {
        setAllCandidates(newList)
      }
      setFilteredCandidates(newList)
    }
    if (soringOrder === "ascending") {

      reverse();
    } else if (soringOrder === "descending") {
      reverse();
    }

  }

 
  const filterarrray = (i: string) => {
    const newarr = allCandidates.filter(function (candidate) {
      return candidate.date.substring(3, 15).trim() === i
    })
    console.log(newarr)

    setFilteredCandidates(newarr)
  }

  return (
    <>

      <Header
        info="All Candidates"
        user={user}
        content
        getOrder={(data: any) => { setSortingOrder(data); sorto(soringOrder) }}
        getDate={(data: any) => filterarrray(data)}
      />
      <Container >
        <div className="container pb-4" >
          <div className="row justify-content-start text-center " >
            {!filteredCandidates ?
              allCandidates.map((candidate) => (
                <div className=" col-sm-12  col-md-6 col-lg-4 pt-4" key={candidate.email} >
                  <>

                    <Card
                      clickHandler={() => clickHandler(candidate.email, candidate.candidateName)}
                      isFlex={true}
                      email={candidate.email}
                      name={candidate.candidateName}
                      allMarks={addMarks(candidate.testsTaken)}
                      date={candidate.date ? candidate.date.substring(3, 15) : ""}

                    />
                  </>
                </div>
              )) : filteredCandidates.map((candidate: any) => (
                <div className=" col-sm-12  col-md-6 col-lg-4 pt-4" key={candidate.email} >
                  <>

                    <Card
                      clickHandler={() => clickHandler(candidate.email, candidate.candidateName)}
                      isFlex={true}
                      email={candidate.email}
                      name={candidate.candidateName}
                      allMarks={addMarks(candidate.testsTaken)}
                      date={candidate.date ? candidate.date.substring(3, 15) : ""}

                    />
                  </>
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


