import "./App.css";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Signin} from "./pages/signIn"
import { LandingPage } from "./pages/landingPage";
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/signIn" element={<Signin/>}></Route>
    </Routes>
 
    </BrowserRouter>
  );
}


export default App;
