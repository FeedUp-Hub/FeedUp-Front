import React, { useEffect, useState } from "react"
import Cookies from "js-cookie"
import Navbar from "../../components/Navbar"
import Feedback from "../../components/Cards/Feedbacks"
import Input from "../../components/Input"
import style from "./User.module.css"
import { api } from "../../services/api"
import { jwtDecode } from "jwt-decode"

import { FaComment } from "react-icons/fa6"
import { FaComments } from "react-icons/fa6"
import { PiAcornFill } from "react-icons/pi"
import { MdSearch } from "react-icons/md"


export function User() {
  const [search, setSearch] = useState("")
  const [user, setUser] = useState({})
  const [feedback_send, setFeedback_send] = useState([])
  const [feedback_received, setFeedback_received] = useState([])
  const token = Cookies.get('token')
  const typeUser = jwtDecode(token).typeuser

  useEffect(() => {
    if (token) {
      api.get(typeUser === 3 ? '/people' : typeUser === 2 ? '/leader' : '/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setFeedback_received(res.data.feedback_received.reverse())
        setFeedback_send(res.data.feedback_send)
        setUser(res.data.users[0])
      })
      .catch(error => console.error(error));
    }
  }, [])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = () => {
    if (search) {
      api.get(typeUser === 3 ? `/people/${search}` : typeUser === 2 && `/leader/${search}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data)
        setFeedback_received(res.data.feedback_received.reverse())
        setFeedback_send(res.data.feedback_send)
        setUser(res.data.users[0])
      })
      .catch((err) => err.response.status === 404 ? typeUser === 2 && alert("Usuário não encontrado ou não pertence à sua trilha") : console.error(err))
    }
  }

  return (
    Cookies.get("token") == undefined ? window.location.href = "/" :
    <React.Fragment>
        <Navbar/>
        <main className={style.profile}>
            { (typeUser === 3 || typeUser === 2) &&
              <section className={style.userinfo_controller}>
                  <h1>Bem vindo!</h1>
                  <p>Aqui você pode ver informações do perfil, tanto seu, quanto dos demais usuários {typeUser === 2 && 'da sua Trilha'}</p>
                  <div className={style.search_bar}>
                    <Input type="text" value={search} onchange={handleSearchChange} id="search-user-input">Buscar Usuário</Input>
                    {search && <MdSearch className={style.search_icon} onClick={handleSearch}/>}
                  </div>
              </section>
            }
            <section className={style.userinfo}>
              <div className={style.title}>
                <h1>{user.name}</h1>
                <h3>Time de {user.role}</h3>
              </div>
              <ul className={style.info}>
                <li>
                  <FaComment size={25}/>
                  <p>Enviados</p>
                  <span>{feedback_send.length}</span>
                </li>
                <div className={style.border}></div>
                <li>
                  <FaComments size={28}/>
                  <p>Recebidos</p>
                  <span>{user.total_feedbacks}</span>
                </li>
                <div className={style.border}></div>
                <li>
                  <PiAcornFill size={25}/>
                  <p>Nozes</p>
                  <span>{user.coin}</span>
                </li>
              </ul>
            </section>
            <h2>Feedbacks Recebidos</h2>
            <div className={style.user_feedbacks}>
            {feedback_received.length > 0 && feedback_received.map((feedback, i) => (
              <Feedback key={i} feedback={feedback} index={i} />
            ))}
            </div>
        </main>
    </React.Fragment>
  )
}