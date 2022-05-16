import { useContext, useState, useEffect } from 'react'
import { Container, Form, Input, Button , Menu} from './User.styled';
import {useNavigate} from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext/GlobalContextProvider';



const User = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin]= useState(true);
  const nav= useNavigate()
  const ctx = useContext(GlobalContext);
  const { url, saveAdmin, discardAdmin } = ctx;

  const submitHandler=()=>{
     
    if(isLogin){
      if(email==="admin@gmail.com" && password==="ilovemyindia"){
        saveAdmin();
        nav("dashboard", {replace:true})
      }
      else{
        alert("wrong email/password");
      }
    }                 
  }

  useEffect(()=>{
    discardAdmin();
  },[])
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