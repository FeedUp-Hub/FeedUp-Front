import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";
import { Login } from "./pages/Auth/Login";
import { Forgot } from "./pages/Auth/Forgot";
import { Notes } from "./pages/Onboarding/Notes";
import { PostFeed } from "./pages/Post/PostFeed";
import { Culture } from "./pages/Culture/Culture";
import { User } from "./pages/User/User";
import { FeedUp } from "./pages/FeedUp";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Auth/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/pwd-forget' element={<Forgot/>}/>
        <Route path='/feedup' element={<FeedUp/>}/>
        <Route path='/notes' element={<Notes/>} />
        <Route path='/postfeed' element={<PostFeed/>}/>
        <Route path='/cultura' element={<Culture/>}/>
        <Route path='/profile' element={<User/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App