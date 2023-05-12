import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState , useEffect } from "react";
import SignUp from "./component/SignUp/SignUp.jsx";
import AllPosts from "./component/AllBooks/AllPosts.jsx";
import Home from "./component/Home.jsx";
import axios from "axios";
import OnePost from "./component/OnePost/OnePost.jsx";
import AddBook from "./component/AddBook.jsx";

function App() {
  const [data,setData]=useState([])
  const fetchData=()=>{
    axios.get("http://127.0.0.1:3001/Books-Gallery/book/getAllBooks")
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
      })
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all" element={<AllPosts data={data} />} />
        <Route path="/add" element={<AddBook/>}/>
        <Route path="/OnePost" element={<OnePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
