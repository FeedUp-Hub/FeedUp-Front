import React from "react"
import {Login} from "./Login"
import { FeedUp } from "../Feed/FeedUp"

export function Auth() {
    const userIsLoggedIn = () => {
        const loggedUser = localStorage.getItem('loggedUser')
        if (loggedUser) {
            return true
        }
        return false
    }

    return userIsLoggedIn() ? <FeedUp/> : <Login />
}