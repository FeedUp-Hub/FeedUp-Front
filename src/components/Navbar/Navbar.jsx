import React from "react"
import Cookies from "js-cookie"
import { Link } from "react-router-dom"
import { LiaHandHoldingHeartSolid } from "react-icons/lia"
import { PiUserCircle } from "react-icons/pi"
import { CgAdd } from "react-icons/cg"
import { BiDoorOpen } from "react-icons/bi"

import style from "./Navbar.module.css"

export function Navbar() {
    const token = Cookies.get("token")
    const userLogout = () => {
        Cookies.remove("token")
        window.location.href = '/'
    }

    return (
        <nav className={style.navbar}>
            <Link to="/"><img src="/2-removebg-preview.png" alt="logo-feedup" /></Link>
            <ul>
                <li><Link to="/profile"><PiUserCircle /></Link></li>
                <li><Link to="/cultura"><LiaHandHoldingHeartSolid /></Link></li>
                <li><BiDoorOpen onClick={userLogout}/></li>
                <li><Link to="/postfeed"><CgAdd /></Link></li>
            </ul>
        </nav>
    )
}