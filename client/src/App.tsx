import { AppContainer } from "./App.styled";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages";
import { Assessment } from "./pages/assessment";
import { useContext } from "react";
import { Test } from "./pages/assessment/Test";
import { User } from "./pages/user";
import { Dashboard } from "./pages/user/Dashboard";
import { GlobalContext } from "./GlobalContext/GlobalContextProvider";
import Alltests from "./pages/user/Dashboard/AllTests/Alltests";
import Submissions from "./pages/user/Dashboard/AllTests/submissions/Submissions";
import StyleGuide from "./pages/styleguide";
import Colors from "./pages/styleguide/colors";
import Elements from "./pages/styleguide/elements";
import TestOver from "./pages/TestOver";


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
          {isAdmin && <Route path="/user/dashboard/:email" element={<Alltests />}></Route>}
          {isAdmin && <Route path="/user/dashboard/:email/:title" element={<Submissions />}></Route>}
          {token && <Route path="/assessment/*" element={<Assessment />}></Route>}
          {token && <Route path="/assessment/:title" element={<Test />}></Route>}
          <Route path="/styleguide" element={<StyleGuide />}>
            <Route path="/styleguide/colors" element={<Colors/>} />
            <Route path="/styleguide/elements" element={<Elements/>} />
          </Route>
          <Route path="/testOver" element={<TestOver />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
