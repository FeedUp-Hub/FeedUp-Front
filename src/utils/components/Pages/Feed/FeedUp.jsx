import React from "react";
import Navbar from "../../Layout/Navbar/";
import style from "./FeedUp.module.css";
import Home from "./Home";

export function FeedUp() {
  return (
      <main className={style.main}>
        <Navbar/>
        <Home/>
      </main>
  )
}