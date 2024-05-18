import React from "react"
import { Link } from "react-router-dom"
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { PiUserCircle } from "react-icons/pi"
import { CgAdd } from "react-icons/cg"
import { HiChartBar } from "react-icons/hi2";
import { HiClipboardDocumentList } from "react-icons/hi2";

import style from "./Navbar.module.css"

export function Navbar() {
    return (
        <nav className={style.navbar}>
            <Link to="/"><img src="/2-removebg-preview.png" alt="logo-feedup" /></Link>
            <ul>
                <li><Link to="/profile"><PiUserCircle /></Link></li>
                <li><Link to="/cultura"><LiaHandHoldingHeartSolid /></Link></li>
                <li><Link to="/postfeed"><CgAdd /></Link></li>
            </ul>
        </nav>
    )
}