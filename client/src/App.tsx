import { AppContainer } from "./App.styled";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { Home } from "./pages";
// import { User } from "./pages/user";
import { Assessment } from "./pages/assessment";
// import { Dashboard } from "./pages/user/Dashboard";
import React, { useState } from "react";
import { Test } from "./pages/assessment/Test";
import { User } from "./pages/user";
import { Dashboard } from "./pages/user/Dashboard";

type DataInterface = {
  candidate: {
    name: string,
    email: string
  },
  saveCandidateName: (name: string) => void,
  saveCandidateEmail: (name: string) => void,
  token: string,
  setToken: (token: string) => void,
  isCompleted: any,
  setIsCompleted: (i: object) => void,
  url: string
}

export const GlobalContext = React.createContext({} as DataInterface);

function App() {
  const [candidate, setCandidate] = useState({
    name: sessionStorage.getItem("name") || "",
    email: sessionStorage.getItem("email") || "",
  });

  const [token, setToken] = useState(sessionStorage.getItem("token") || "");
  let initData: string | null = sessionStorage.getItem('isCompleted')
  const [isCompleted, setIsCompleted] = useState(initData && JSON.parse(initData) || {
    "html-and-css": false,
    "javascript": false,
    "typescript": false,
    "react": false,
    "node-js": false,
    "git": false,
    // "code-quality":false
  })

  const url = 'http://localhost:9000';

  const saveName = (name: string) => {
    setCandidate({ ...candidate, name: name });
    sessionStorage.setItem("name", name);
  };

  const saveToken = (token: string) => {
    setToken(token)
    sessionStorage.setItem("token", token)
  }

  const saveEmail = (email: string) => {
    setCandidate({ ...candidate, email: email });
    sessionStorage.setItem("email", email);
  };

  const saveIsCompleted = (i: object) => {
    setIsCompleted({ ...i });
    sessionStorage.setItem('isCompleted', JSON.stringify(i))
  }



  const data = {
    candidate: candidate,
    saveCandidateName: saveName,
    saveCandidateEmail: saveEmail,
    token,
    setToken: saveToken,
    isCompleted,
    setIsCompleted: saveIsCompleted,
    url
  };

  return (
    <GlobalContext.Provider value={data}>
      <AppContainer>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/user/dashboard" element={<Dashboard />}></Route>
            {token && <Route path="/assessment/*" element={<Assessment />}></Route>}
            {token && <Route path="/assessment/:title" element={<Test />}></Route>}
            <Route path="*" element={<Navigate to="/" replace />}
            />
          </Routes>
        </Router>
      </AppContainer>
    </GlobalContext.Provider>
  );
}

export default App;
