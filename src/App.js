import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/home.js";
import Login from "./pages/login/Login.js";
import SignUp from "./pages/signup/SignUp.js";
import Navbar from "./Components/Navbar.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
