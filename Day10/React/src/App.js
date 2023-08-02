import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Signup from "./Components/Signup/Signup";
// import Signin from "./Components/Signin/Signin";
import AuthRoutes from "./routes/Auth";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  const user = "";
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<div>Hello</div>} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="/signin" element={<Signin />} />
    //     </Routes>
    <div className="App">
      <Router>{user ? <ProtectedRoutes /> : <AuthRoutes />}</Router>
    </div>
    //   </div>
    // </Router>
  );
}

export default App;
