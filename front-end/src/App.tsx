import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from "./pages/signIn";
import { LandingPage } from "./pages/landingPage";
import { SignUp } from "./pages/singup";
import { Main } from "./pages/main";
import { Add } from "./pages/habit";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signIn" element={<Signin />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/habits" element={<Add />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
