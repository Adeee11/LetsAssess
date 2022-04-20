import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../App';
import { Container } from './Home.Styled';

const Home = () => {

const nav= useNavigate();
const ctx=useContext<any>(GlobalContext)
const time= ctx.startTime
const setToken = ctx.setToken
const token =ctx.token
const submit=async()=>{ 
   time();
   
   var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": ctx.candidate.name,
  "candidateName": ctx.candidate.email
});


 fetch("http://localhost:9000/candidate",{
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
   

   
    fetch("http://localhost:9000/authenticate", {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  })
     .then(response => response.text())
     .then(result =>{ 
       console.log(result)
       setToken(result)
       nav('/assessment');                   
    })
     .catch(error => console.log('error', error)); 

    
}

console.log(token);
   return (
    <>
    <Container>

      <div className='input-box'>
        <span>Email</span>
        <input type="text" 
        onChange={(e)=>ctx.saveCandidateEmail(e.target.value)}
        />
      </div>
      

      <pre>
     
      </pre>
      <div className='input-box'>
        <span>Name</span>
        <input 
        type="text" 
        onChange={(e)=>ctx.saveCandidateName(e.target.value)}
        />
      </div>
      <button onClick={submit}>Submit</button>
    </Container>
    {/* <textarea onChange={(e)=>setData(e.target.value)} value={data}>

    </textarea> */}
    </>
  )
}

export default Home