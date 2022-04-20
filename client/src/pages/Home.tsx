import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../App';
import { Container } from './Home.Styled';

const Home = () => {

const nav= useNavigate();
const ctx=useContext<any>(GlobalContext)
const time= ctx.startTime

const submit=()=>{ 
   time(); 
   nav('/assessment');

}
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