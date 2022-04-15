import React, { useEffect, useState } from 'react'
import { Container, Card, Header , CandidateDetails, Question, Option, Submissions} from './Dashboard.styled';
import { data } from '../Dashboard/../../../components/Test/jstest';
import CustomComponent from '../../../components/CustomComponent/CustomComponent';
const user = "Pramod";

const candidatesList = [
    {
        username: "candidate1",
        email: "candidate1@gmail.com"
    },
    {
        username: "candidate2",
        email: "candidate2@gmail.com"
    },
    {
        username: "candidate3",
        email: "candidate3@gmail.com"
    },
    {
        username: "Candidate",
        email: "candidate4@gmail.com"
    }
]

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
    1,2,3,4,1,2,3,4,1,2,1,2,3,4,1,2,3,4,1,2
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

  const [title, setTitle] = useState('');
  
  const [marks, setMarks] = useState(0);

    const clickHandler=(candidate:{username:string, email:string})=>{
        setShow({showSubmission:false, showAllTest:true, showAllCandidates:false});
        setCandidate({name:candidate.username, email:candidate.email})
    }

    const showPaper=(title:string)=>{
        setTitle(title)
        setShow({showAllTest:false, showAllCandidates:false, showSubmission:true});
        
    }
useEffect(()=>{
    calculateMarks();
})
    const calculateMarks=()=>{
        let mark=0;
        for(let i=0; i<data.Questions.length; i++){
            if(data.Questions[i].correctOption==listOfSubissions[i])
            mark++;
        }
        setMarks(mark);

    }
    
    return (<>
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
                candidatesList.map((candidate) => <Card onClick={()=>clickHandler(candidate)}>
                    <span>{candidate.username}</span>
                    <span>{candidate.email}</span>
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
            
        {show.showAllTest &&
                 
                 listOfTests.map((test) => <Card onClick={()=>showPaper(test.title)}>
                     <img src={test.imgSrc}/>
                     <span>{test.title}</span>
                     
                 </Card>)
             }
        </Container>

        {
            show.showSubmission &&
            <Submissions>
                <p>{`${marks}/${data.Questions.length}`}</p>
                {data.Questions.map((item, index)=>
                <div>
                    <Question><span>{item.quesId}.</span>{item.quesValue}{item.correctOption==listOfSubissions[index]?<span className='marks-right'>&#10003;</span>:<span className='marks-wrong'>&#10060;</span>}</Question>
                    {item.useCustomComponent && 
                    <Question>
                         <CustomComponent data={item.props}/>
                    </Question>
                    
                    }
                        {item.options.map((opt)=>
                          <Option className={opt.optionId==item.correctOption?"right":""}>
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