import React from "react"
import {Login} from "./Login"
import Feeling from "../../Funcionalities/Feeling";
//import {Home} from "../Home"

export function Auth() {
    const userIsLoggedIn = () => {
        const isLogged = localStorage.getItem('isLogged') || 'false'
        return isLogged === 'true'
    };

    return (
        userIsLoggedIn() ? <Feeling/> : <Login />
    )
}