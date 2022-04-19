import { AppContainer } from './App.styled';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {Home} from './pages';

import { User } from './pages/user';
import { Candidate } from './pages/candidate';
import { Dashboard } from './pages/user/Dashboard';
import React, { useState } from 'react';





export const GlobalContext = React.createContext({});

function App() {
const [candidate, setCandidate]= useState({
  name:"",
  email:""
})
  const saveName=(name:string)=>{
       setCandidate({...candidate,
         name:name
           })
       
  }

  const saveEmail=(email:string)=>{
    setCandidate({...candidate,
      email:email
        })
  }
  const data={
    
    candidate:candidate,
    saveCandidateName:saveName,
    saveCandidateEmail:saveEmail
  }
  return (
    <GlobalContext.Provider value={data}>
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/user/dashboard" element={<Dashboard />}></Route>
          <Route path="/candidate" element={<Candidate />}></Route>
        </Routes>
      </Router>

    </AppContainer>
    </GlobalContext.Provider>
  );
}

export default App;
