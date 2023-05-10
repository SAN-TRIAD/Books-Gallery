import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./component/SignUp/SignUp.jsx"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
  
          <Route path="/" element={<Signup />} /> 
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
