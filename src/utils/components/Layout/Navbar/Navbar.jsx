import React from "react"
import { Link } from "react-router-dom"
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { PiUserCircle } from "react-icons/pi"
import { CgAdd } from "react-icons/cg"

import style from "./Navbar.module.css"

export function Navbar() {
    return (
        <nav className={style.navbar}>
            <Link to="/"><img src="/2-removebg-preview.png" alt="logo-feedup" /></Link>
            <ul>
                <li><PiUserCircle onClick={console.log("oi")}/></li>
                <li><Link to="/cultura"><LiaHandHoldingHeartSolid /></Link></li>
                <li><Link to="/postfeed"><CgAdd /></Link></li>
            </ul>
        </nav>
    )
}