import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./utils/components/Pages/Auth/Auth";
import { Login } from "./utils/components/Pages/Auth/Login";
import { Signin } from "./utils/components/Pages/Auth/Signin";
import { FeedUp } from "./utils/components/Pages/Feed/FeedUp";
import { Notes } from "./utils/components/Pages/Initial Notes/Notes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Auth/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/feedup' element={<FeedUp/>}/>
        <Route path='/notes' element={<Notes/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App