import React from "react";
import Cookies from "js-cookie"
import { Login } from "./Login";
import { FeedUp } from "../FeedUp";

export function Auth() {
  const hasValidToken = () => {
    const token = Cookies.get("token")
    return token != undefined
  }

  return hasValidToken() ? <FeedUp /> : <Login />
}
