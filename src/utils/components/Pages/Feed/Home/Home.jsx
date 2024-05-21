import React, { useEffect, useState } from "react";
import Rank from "../../../Layout/Cards/Ranking/"
import style from "./Home.module.css"
import Feedback from "../../../Layout/Cards/Feedbacks/"
import Cookies from "js-cookie"
import {api} from "../../../../services/api"

export function Home() {

  const [feedupData, setFeedupData] = useState([])
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      api.get('/home', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data);
        setFeedupData(res.data.feedupFound.reverse());
        setUserData(res.data.users);
      })
      .catch(error => console.error(error));
    }
  }, [])

  return (
    <div className={style.container}>
        {feedupData.length > 0 && (
          <aside className={style.feedbacks}>
            <h3>Feedups enviados</h3>
            {feedupData.map((feedback, i) => (
              <Feedback key={i} feedback={feedback} index={i} />
            ))}
          </aside>
        )}
        <div className={style.div_rank}>
            <h3>Ranking</h3>
            <Rank users={userData} />
        </div>
    </div>
  )
}