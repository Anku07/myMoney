import { BrowserRouter, Route, Router, Routes} from "react-router-dom";

import Home from './pages/home/Home.js'
import Login from './pages/login/Login.js'
import SignUp from './pages/signup/SignUp.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/SignUp" element={<SignUp/>} />  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
