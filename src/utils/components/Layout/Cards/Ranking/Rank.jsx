import React, { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"
import style from "./Rank.module.css"

export function Rank({ users }) {

    const [rankData, setRankData] = useState({
        rank_users: null,
        loggedUserPosition: null,
        loggedUserInfo: null
    })

    useEffect(() => {
        const userDecoded = jwtDecode(Cookies.get("token"))
        const loggedUser = users.find((user) => user.username === userDecoded.username)
    
        if (loggedUser) {
          const loggedUserPosition = users.findIndex(
            (user) => user.username === loggedUser.username
          )
    
          setRankData({
            rank_users: users.slice(0, 3),
            loggedUserPosition,
            loggedUserInfo: loggedUser,
          })

        } else {
          console.warn("Logged user not found in provided data.")
        }
    }, [users])

    return (
        <ul className={style.rank}>
          {rankData.rank_users && rankData.rank_users.map((user, index) => (
            <>
                <li key={index}>
                    <span key={'pos_' + index}>{index + 1}</span>
                    <p key={'name_' + index}>{user.name}</p>
                    <i key={'feedups_' + index}>{user.mention_count}</i>
                </li>
                {index < rankData.rank_users.length - 1 && <hr/>}
            </>
          ))}
          {rankData.loggedUserPosition !== null && (
            <li className={style.userPos}>
              <span>{rankData.loggedUserPosition + 1}</span>
              <p>{rankData.loggedUserInfo.username}</p>
              <i>{rankData.loggedUserInfo.mention_count}</i>
            </li>
          )}
        </ul>
      )
}
