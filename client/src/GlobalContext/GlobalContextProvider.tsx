import React, { createContext, useState } from "react";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type interfaceCandidate={
  name:string;
  email:string;
}

export type DataInterface = {
  candidate: {
    name: string;
    email: string;
  };
  saveCandidateData:(i:interfaceCandidate)=>void;
  token: string;
  setToken: (token: string) => void;
  isCompleted: any;
  saveIsCompleted: (i: object) => void;
  url: string;
  isAdmin: boolean;
  saveAdmin: () => void;
  discardAdmin: () => void;
  logout:()=>void; 
};

export const GlobalContext = createContext({} as DataInterface);

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  
  
  const candidateInit= sessionStorage.getItem('candidate');
  const [candidate, setCandidate] = useState(candidateInit && JSON.parse(candidateInit));

  const [token, setToken] = useState(sessionStorage.getItem("token") || "");
  let initData: string | null = sessionStorage.getItem("isCompleted");

  const [isCompleted, setIsCompleted] = useState(
    (initData && JSON.parse(initData)) || {
      "html-and-css": false,
      javascript: false,
      typescript: false,
      react: false,
      "node-js": false,
      git: false,
    }
  );

  const url = "https://lionfish-app-hb2nk.ondigitalocean.app";

  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") ? true : false || false
  );

 const saveCandidateData=(i:interfaceCandidate)=>{
    setCandidate({...i})
    sessionStorage.setItem("candidate", JSON.stringify(i));
  }

  const saveAdmin = () => {
    setIsAdmin(true);
    localStorage.setItem("isAdmin", "true");
  };

  const discardAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };

  const saveToken = (token: string) => {
    setToken(token);
    sessionStorage.setItem("token", token);
  };

   const saveIsCompleted = (i: object) => {
    setIsCompleted({ ...i });
    sessionStorage.setItem("isCompleted", JSON.stringify(i));
  };

  const logout=()=>{
    sessionStorage.clear();
    setCandidate({name:'', email:''});
    setToken('');
  }

 const data = {
    candidate: candidate,
    saveCandidateData,
    token,
    setToken: saveToken,
    isCompleted,
    saveIsCompleted,
    url,
    isAdmin,
    saveAdmin,
    discardAdmin,
    logout,  
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
