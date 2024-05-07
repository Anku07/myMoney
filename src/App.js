import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.js";
import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login.js";
import SignUp from "./pages/signup/SignUp.js";
import Navbar from "./Components/Navbar.js";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={user ? <Home /> : <Navigate to="/Login" />} />
            <Route path="/Login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/SignUp" element={user ? <Navigate to="/" /> : <SignUp />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;