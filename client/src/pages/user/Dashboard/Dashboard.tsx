import React, { useEffect, useState } from 'react'
import { Container, Card, Header , CandidateDetails, Question, Option, Submissions} from './Dashboard.styled';

import CustomComponent from '../../../components/CustomComponent/CustomComponent';
import { data } from '../jstest';
import { Button } from '../../../components/Button';
const user = "Pramod";



const listOfTests=[
    {
        title:"HTML and CSS",
        imgSrc:"/images/html.png",
    },
    {
        title:"JavaScript",
        imgSrc:"/images/js.png",
    },
    {
        title:"TypeScript",
        imgSrc:"/images/ts.svg",
    },
    {
        title:"React JS",
        imgSrc:"/images/react.png",
    },
    {
        title:"Node JS",
        imgSrc:"/images/node.png",
    },
    {
        title:"Code Quality",
        imgSrc:"/images/cq.png",
    },
]

const listOfSubissions=[
    "1","2","3","4","1","2","3","4","1","2","1","2","3","4","1","2","3","4","1","2"
]

const Dashboard = () => {
    const [show, setShow] = useState({
        showAllCandidates:true,
        showAllTest:false,
        showSubmission:false,
    })
  const [candidate, setCandidate]=useState({
      name:"",
      email:""
  })

  const [allCandidates, setAllCandidates] = useState([{
      candidateName:'',
      email:''
  }]);

  const [candidateData, setCandidateData] = useState<{marksObtained:number, assessmentId:string}[] |null>(null);
  const [title, setTitle] = useState('');
  
  const [marks, setMarks] = useState(0);

    const clickHandler=(candidate:{candidateName:string, email:string})=>{
        setShow({showSubmission:false, showAllTest:true, showAllCandidates:false});
        setCandidate({name:candidate.candidateName, email:candidate.email})
        
          fetch(`http://localhost:9000/candidate/${candidate.email}/assessments`, {
            method: 'GET',
            redirect: 'follow'
          })
            .then(response => response.json())
            .then(result => {console.log(result)
            setCandidateData(result.data)
            })
            .catch(error => console.log('error', error));
    }

    const showPaper=(title:string)=>{
        setTitle(title)
        setShow({showAllTest:false, showAllCandidates:false, showSubmission:true});     
    }


    useEffect(() => {
        
          fetch("http://localhost:9000/user/candidates", {
            method: 'GET',
            redirect: 'follow'
          })
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                setAllCandidates(result.data)
            } )
            .catch(error => console.log('error', error));
    
      return () => {
        
      }
    }, [])
    
    const imageSrc = (title: string) => {
        if (title === "javascript") return "/images/js.png";
        else if (title === "html-and-css") return "/images/html.png";
        else if (title === "typescript") return "/images/ts.svg";
        else if (title === "node-js") return "/images/node.png";
        else if (title === "react") return "/images/react.png";
        else if (title === "git") return "/images/git.png";
      };
    
    return (
    
    <>
    
        <Header>
            <li>
                {show.showAllCandidates && "All Candidates"}
                {show.showAllTest && "All Tests"}
                {show.showSubmission && `Submission of ${title}`}
            </li>
            <li></li>
            <li className='avatar'>
                {user[0]}
            </li>
        </Header>
        <Container>

            {show.showAllCandidates &&
                allCandidates.map((candidate) => <Card >
                    <span>{candidate.candidateName}</span>
                    <span>{candidate.email}</span>
                    <button onClick={()=>clickHandler(candidate)}>Show Marks</button>
                </Card>)
            }
            

        </Container>
        {
             (show.showAllTest|| show.showSubmission) &&   
            <CandidateDetails>
                <span><b>Candidate : </b>{candidate.name}</span>
                <span><b>Email : </b>{candidate.email}</span>
            </CandidateDetails>
            }
        <Container>
            
        {show.showAllTest &&candidateData &&
                 
                 candidateData.map((test) => <Card >
                     {/* <img src={test.imgSrc}/> */}
                     {/* <span>{test.title}</span> */}
                     <img src={imageSrc(test.assessmentId)}/>
                     <span><b>Marks:</b>{test.marksObtained}</span> 
                      <span>{test.assessmentId}</span>
                     
                 </Card>)
             }
        </Container>

        {
            show.showSubmission &&
            <Submissions>
                <p>{`${marks}/${data.questions.length}`}</p>
                {data.questions.map((item, index)=>
                <div>
                    <Question>
                        <span>{item.quesId}.</span>
                        {item.quesValue}
                        {/* {item.correctOption==listOfSubissions[index]?
                        <span className='marks-right'>&#10003;</span>:
                        <span className='marks-wrong'>&#10060;</span>
                        } */}
                        </Question>
                    {item.useCustomComponent && 
                    <Question>
                         <CustomComponent data={item.props}/>
                    </Question>
                    
                    }
                        {item.options.map((opt)=>
                          <Option >
                              {!opt.useCustomComponent && opt.optionValue}
                              {opt.useCustomComponent &&
                              <CustomComponent data={opt.optionProps}/>
                              }
                              
                              </Option>    
                        )}
                    
                </div>
                )}
          
            </Submissions>
        }
    </>
    )
}

export default Dashboard