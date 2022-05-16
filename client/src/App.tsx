import { AppContainer } from "./App.styled";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages";
import { Assessment } from "./pages/assessment";
import { useContext } from "react";
import { Test } from "./pages/assessment/Test";
import { User } from "./pages/user";
import { Dashboard } from "./pages/user/Dashboard";
import { GlobalContext } from "./GlobalContext/GlobalContextProvider";


function App() {

  const ctx = useContext(GlobalContext)
  const { isAdmin, token } = ctx

  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          {isAdmin && <Route path="/user/dashboard" element={<Dashboard />}></Route>}
          {token && <Route path="/assessment/*" element={<Assessment />}></Route>}
          {token && <Route path="/assessment/:title" element={<Test />}></Route>}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
