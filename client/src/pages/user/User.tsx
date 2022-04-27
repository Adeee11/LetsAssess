import React, { useState } from 'react'
import { Container, Form, Input, Button , Menu} from './User.styled';
import {useNavigate} from 'react-router-dom';

const User = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin]= useState(true);
  const nav= useNavigate()
  const submitHandler=()=>{
     
    
    //firebase function to signup
    //  send to login page with field data then after login
    
    
    //firebase function to login

    if(isLogin){
      if(email==="admin@gmail.com" && password==="ilovemyindia"){
        nav("dashboard")
      }
      else{
        alert("wrong email/password");
      }
    }
    
    // if entered email and password are correct than navigate it to user/dashboard
                      
  }
  return (
    <>
    <Menu>
      <span onClick={()=>setIsLogin(!isLogin)}>
       {isLogin?"For New User Register here":"Already Registered"} 
      </span>
    
    </Menu>
    <Container>

      <Form>
        <Input>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Input>

        <Input>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Input>
        <Button onClick={submitHandler}>{isLogin?"Login":"SignUp"}</Button>
      </Form>
    </Container>
    </>
  )
}

export default User