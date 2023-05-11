import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./component/SignUp/SignUp.jsx"
//import Login from "./component/SignUp/Login.jsx";

function App() {
  return (
    <div className="root">
     <BrowserRouter>
        <Routes>
  
          <Route path="/" element={<Signup />} /> 
          {/* <Route path="/" element={<Login />} />  */}
        </Routes>
        </BrowserRouter>
    </div>
   
  );
}

export default App;
