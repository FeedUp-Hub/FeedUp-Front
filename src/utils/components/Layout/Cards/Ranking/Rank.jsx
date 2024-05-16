import React, { useState, useEffect } from "react";
import style from "./Rank.module.css"

export function Rank() {
    return (
        <ul className={style.rank}>
            <li><span>1</span><p>Giovana Wilberg</p><i>30</i></li>
            <hr />
            <li><span>2</span><p>Fernando Santiago</p><i>26</i></li>
            <hr />
            <li><span>3</span><p>Gustavo Vieira</p><i>22</i></li>
            <li className={style.userPos}><span>22</span><p>Bernardo Alvim</p><i>10</i></li>
        </ul>
    )
}
