import { AppContainer } from './App.styled';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {Home} from './pages';

import { User } from './pages/user';
import { Assessment } from './pages/assessment';
import { Dashboard } from './pages/user/Dashboard';
import React, { useState } from 'react';
import { Test } from './pages/assessment/Test';





export const GlobalContext = React.createContext({});

function App() {
const [candidate, setCandidate]= useState({
  name:sessionStorage.getItem('name')||"",
  email:sessionStorage.getItem('email')||""
})



const [queNo, setQueNo] =useState<string|number>(0);

const [selectedOpt, setSelectedOpt] = useState<(string | boolean[])[] | any>([]);

const saveName=(name:string)=>{
       setCandidate({...candidate,
         name:name
           })
    sessionStorage.setItem('name', name);    
       
  }

  const saveEmail=(email:string)=>{
    setCandidate({...candidate,
      email:email
        })
        sessionStorage.setItem('email', email)
  }

  



  const data={
    
    candidate:candidate,
    saveCandidateName:saveName,
    saveCandidateEmail:saveEmail,
    queNo,
    setQueNo,
    selectedOpt,
    setSelectedOpt
  }
  return (
    <GlobalContext.Provider value={data}>
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/user/dashboard" element={<Dashboard />}></Route>
          <Route path="/assessment/*" element={<Assessment />}></Route>
          <Route path="/assessment/:title" element={<Test/>}></Route>
        </Routes>
      </Router>

    </AppContainer>
    </GlobalContext.Provider>
  );
}

export default App;
