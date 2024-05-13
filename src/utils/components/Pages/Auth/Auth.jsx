import React from "react"
import {Login} from "./Login"
import Feeling from "../../Funcionalities/Feeling";
//import {Home} from "../Home"

export function Auth() {
    const userIsLoggedIn = () => {
        const loggedUser = localStorage.getItem('loggedUser')
        if (loggedUser) {
            return true
        }
        return false
    }

    return userIsLoggedIn() ? <Feeling/> : <Login />
}