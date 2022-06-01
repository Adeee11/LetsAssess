import { useContext, useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
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
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [sortingBy, setSortingBy] = useState('date');
  const [orderingByAsc, setOrderingByAsc] = useState(true);

  const [filteredCandidates, setFilteredCandidates] = useState<any>(null);
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


  // const sorto = (order: string) => {
  //   const arr1 = !filteredCandidates ? allCandidates : filteredCandidates;
  //   setSortingOrder(order);
  //   if(sortingOrder==="asc"){
  //      arr1.reverse();

  //      console.log(arr1); 
  //   }else{
  //     arr1.reverse();
  //   }
  //   setAllCandidates([...arr1])
  // }


  const sortByScore = (sortBy: string, isAscending?: boolean) => {
    const arr1 = !filteredCandidates ? allCandidates : filteredCandidates;
    if (sortBy === "score") {

      const sortcandidateMarks = arr1.sort(function (a: any, b: any) {
        if (addMarks(a.testsTaken) > addMarks(b.testsTaken))
          return isAscending ? 1 : -1
        else if (addMarks(a.testsTaken) < addMarks(b.testsTaken))
          return isAscending ? -1 : 1
        else return 0
      })
      if (!filteredCandidates) {
        setAllCandidates([...sortcandidateMarks])
      }
      setFilteredCandidates([...sortcandidateMarks])
      console.log("sorted acc to marks", sortcandidateMarks)

    }
    if (sortBy === "date") {
      const list = arr1.sort(function (a: any, b: any) {
        console.log(a._id > b._id)
        if (a._id > b._id) {
          return isAscending ? 1 : -1
        } else if (a._id < b._id) {
          return isAscending ? -1 : 1
        } else {
          return 0
        }
      })
      console.log("date", arr1);
      if (!filteredCandidates) {
        setAllCandidates([...list])
      }
      setFilteredCandidates([...list])
    }
    else if (sortBy === "name") {
      const list = arr1.sort(function (a: any, b: any) {
        console.log(a.candidateName > b.candidateName)
        if ((a.candidateName).toUpperCase() > (b.candidateName).toUpperCase()) {
          return isAscending ? 1 : -1
        } else if ((a.candidateName).toUpperCase() < (b.candidateName).toUpperCase()) {
          return isAscending ? -1 : 1
        } else {
          return 0
        }
      })
      console.log("date", arr1);
      if (!filteredCandidates) {
        setAllCandidates([...list])
      }
      setFilteredCandidates([...list])
    }

  }
  const applyFilter = () => {
    const filterDate = {
      start_date: startDate?.toISOString() || '',
      end_date: endDate?.toISOString() || '',
    };

    const filteredItems = allCandidates.filter((item, index) =>
      new Date(item.date).toISOString() >= filterDate.start_date
      &&
      new Date(item.date).toISOString() <= filterDate.end_date
    )

    console.log(filteredItems);
    setFilteredCandidates(filteredItems)
  }

  return (
    <>

      <Header
        info="All Candidates"
        user={user}
      />
      <Container >
        <div className="container pb-4" >
          <div className="row pt-4">
            <div className="col-12 px-4">
              <div className="filter row d-flex  justify-content-between">

                <div className="order col-sm-12 col-md-5 ">

                  <label>SortBy </label>
                  <select onChange={(e) => { setSortingBy(e.target.value); sortByScore(e.target.value, orderingByAsc) }}>
                    <option value="date">Date</option>
                    <option value="score">Score</option>
                    <option value="name">Name</option>
                  </select>
                </div>

                <div className="order col-sm-12 col-md-5 ">

                  <label>Order </label>
                
                  <select onChange={(e) => { setOrderingByAsc(e.target.value === "asc" ? true : false); sortByScore(sortingBy, e.target.value === "asc" ? true : false) }}>
                    <option value="asc">ascending</option>
                    <option value="dec">descending</option>
                  </select>
                </div>

                <div className="startdate col-sm-12 col-md-5 " >
                  <label>Start </label>
                  <input
                    type="date"
                    onChange={(e) => setStartDate(new Date(e.target.value))}
                  />
                </div>

                <div className="enddate col-sm-12 col-md-5 ">
                  <label>End</label>
                  <input
                    type="date"
                    onChange={(e) => setEndDate(new Date(e.target.value))}
                  />
                </div>

                <div className="filter-logo col-sm-12 col-md-5 ">
                  <label></label>
                  <button onClick={applyFilter} className="filterbtn">Apply Filter{" "}<FiFilter /></button>
                </div>

              </div>
            </div>
          </div>
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


