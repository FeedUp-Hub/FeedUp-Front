import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Cookies from "js-cookie";

export function FeedUp() {
  return (
    Cookies.get("token") == undefined ? window.location.href = "/" :
      <React.Fragment>
        <Navbar/>
        <Home/>
      </React.Fragment>
  )
}