import React, { createContext, useState } from 'react'

type GlobalContextProviderProps = {
  children: React.ReactNode
}

export type DataInterface = {
  candidate: {
    name: string,
    email: string
  },
  saveCandidateName: (name: string) => void,
  saveCandidateEmail: (name: string) => void,
  token: string,
  setToken: (token: string) => void,
  isCompleted: any,
  saveIsCompleted: (i: object) => void,
  url: string,
  isAdmin: boolean,
  saveAdmin: () => void,
  discardAdmin: () => void
}

export const GlobalContext = createContext({} as DataInterface)

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [candidate, setCandidate] = useState({
    name: sessionStorage.getItem("name") || "",
    email: sessionStorage.getItem("email") || "",
  });

  const [token, setToken] = useState(sessionStorage.getItem("token") || "");
  let initData: string | null = sessionStorage.getItem('isCompleted')
  const [isCompleted, setIsCompleted] = useState((initData && JSON.parse(initData)) || {
    "html-and-css": false,
    "javascript": false,
    "typescript": false,
    "react": false,
    "node-js": false,
    "git": false,
    // "code-quality":false
  })
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') ? true : false || false);

  const saveAdmin = () => {
    setIsAdmin(true);
    localStorage.setItem('isAdmin', "true");
  }

  const discardAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  }

  const url = 'https://lionfish-app-hb2nk.ondigitalocean.app/';

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
    saveIsCompleted,
    url,
    isAdmin,
    saveAdmin,
    discardAdmin
  };


  return <GlobalContext.Provider value={data}>
    {children}
  </GlobalContext.Provider>
}

export default GlobalContextProvider