import React, { useContext, useEffect, useState } from 'react'
import { Container, Card, Header , CandidateDetails, Question, Option, Submissions} from './Dashboard.styled';

import CustomComponent from '../../../components/CustomComponent/CustomComponent';
import { GlobalContext } from '../../../App';

const user = "Admin";



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

  const [data, setData]= useState<any>(null)
  
  const [candidateData, setCandidateData] = useState<{marksObtained:number, assessmentId:string}[] |null>(null);
  const [title, setTitle] = useState('');
  
  const [marks, setMarks] = useState(0);
  const [optionsMarked, setOptionsMarked] = useState<any>(null)

  const ctx= useContext(GlobalContext);
  const {url}= ctx;
    const clickHandler=(candidate:{candidateName:string, email:string})=>{
        setShow({showSubmission:false, showAllTest:true, showAllCandidates:false});
        setCandidate({name:candidate.candidateName, email:candidate.email})
        
          fetch(`${url}/candidate/${candidate.email}/assessments`, {
            method: 'GET',
            redirect: 'follow'
          })
            .then(response => response.json())
            .then(result => {console.log(result)
            setCandidateData(result.data)
            })
            .catch(error => console.log('error', error));
    }

    const showPaper=async(title:string, mark:number)=>{
       
         await fetch(`${url}/user/${title}/questions`)
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                setMarks(mark);
                setTitle(title)
                setShow({showAllTest:false, showAllCandidates:false, showSubmission:true});
                setData({...result}) 
            } )
            .catch(error => console.log('error', error));

            
              
            await fetch(`${url}/user/options-marked/${title}/${candidate.email}`)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setOptionsMarked(result.optionsMarked)    
                })
                .catch(error => console.log('error', error));  
            
    }

console.log("optionsmarked:",optionsMarked)
    useEffect(() => {
        
          fetch(`${url}/user/candidates`, {
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

      const arrayEquals=(a:any, b:any)=> {
          
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }
    
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
                allCandidates.map((candidate) => <Card onClick={()=>clickHandler(candidate)}>
                    <span>{candidate.candidateName}</span>
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
            
        {show.showAllTest &&candidateData &&
                 
                 candidateData.map((test) => <Card onClick={()=>showPaper(test.assessmentId,test.marksObtained)}>
                
                     <img src={imageSrc(test.assessmentId)}/>
                     <span><b>Marks:</b>{test.marksObtained}</span> 
                      <span >{test.assessmentId}</span>
                     
                 </Card>)
             }
        </Container>

        {
            (show.showSubmission && data && optionsMarked) &&
            <Submissions>
                <p className='marks'>{`${marks}/${data.questions.length}`}</p>
                {data.questions.map((item:any, index:number)=>
                <div className="section">
                    <Question>
                        <span>{item.quesId}.</span>
                        {item.quesValue}
                        {/* {arrayEquals( item.correctOption, optionsMarked[(index+1).toString()])} */}
                        {arrayEquals( item.correctOption, optionsMarked[(index+1).toString()])?
                        <span className='marks-right'>&#10003;</span>:
                        <span className='marks-wrong'>&#10060;</span>
                        }
                        </Question>
                    
                    {item.useCustomComponent && 
                    <Question>
                         <CustomComponent data={item.props}/>
                    </Question>
                    }
                    
                        {item.quesType=="mcq" && item.options.map((opt:any)=>
                          (<>
                          {optionsMarked[item.quesId]==opt.optionId &&<Option >
                            <span >{opt.optionId}.</span>
                              {!opt.useCustomComponent && opt.optionValue}
                              {opt.useCustomComponent &&
                              <CustomComponent 
                              data={opt.optionProps}
                              
                              />
                              }
                               
                              </Option>}
                              </>)    
                        )}
                    

                    {item.quesType=="mcq-m" && item.options.map((opt:any, i:number)=>
                          (<>
                          {optionsMarked[item.quesId][i] &&<Option >
                             
                              <span >{opt.optionId}.</span>
                              {!opt.useCustomComponent && opt.optionValue}
                              {opt.useCustomComponent &&
                              <CustomComponent 
                              data={opt.optionProps}
                              
                              />
                              }
                               
                              </Option>}
                              </>)    
                        )}

                </div>
                )}
          
            </Submissions>
        }
    </>
    )
}

export default Dashboard