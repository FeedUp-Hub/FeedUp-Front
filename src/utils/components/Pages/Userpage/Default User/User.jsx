import React from "react"
import Navbar from "../../../Layout/Navbar"
import Feedback from "../../../Layout/Cards/Feedbacks/"
import style from "../User.module.css"

import { TfiCommentAlt } from "react-icons/tfi";
import { LiaMedalSolid } from "react-icons/lia";
import { PiAcornBold } from "react-icons/pi";

export function User() {

  const users = JSON.parse(localStorage.getItem("users")) || []
  const loggedUser = users.find(user => user.username == JSON.parse(localStorage.getItem("loggedUser")))
  const user = {
    nome: loggedUser.nome,
    trilha: loggedUser.trilha,
    coins: 3000,
    feedbacks: 10,
    ranking_pos: 22,
    feedbacks_recebidos: [
      {
        id: 1,
        author: "Fernando Santiago",
        dateTime: "2 dias atrás",
        text: "@alvimdev, sua liderança no desenvolvimento do aplicativo da Havan foi incrível!  Sua habilidade de coordenar equipes e gerenciar prazos foi essencial para o sucesso do projeto.",
        liked: false,
        comment: "",
      },
      {
        id: 2,
        author: "Paula Martins",
        dateTime: "3 dias atrás",
        text: "@alvimdev, gostaria de reconhecer sua contribuição no projeto de otimização de processos! ",
        liked: false,
        comment: "",
      },
      {
        id: 3,
        author: "Gabriel Vieira",
        dateTime: "4 dias atrás",
        text: "@alvimdev, a criatividade do Alvim na concepção das campanhas de marketing é surreal!!",
        liked: false,
        comment: "",
      },
      {
        id: 4,
        author: "Fernando Santiago",
        dateTime: "5 dias atrás",
        text: "@alvimdev, estou impressionado com sua dedicação aos detalhes! Você realmente faz a diferença na nossa equipe!!",
        liked: false,
        comment: "",
      },
      {
        id: 5,
        author: "Isabella",
        dateTime: "6 dias atrás",
        text: "@alvimdev, a criatividade do Alvim na concepção das campanhas de marketing é surreal!!",
        liked: false,
        comment: "",
      },
    ]
  }

  return (
    <React.Fragment>
        <Navbar/>
        <main className={style.profile}>
            <section className={style.userinfo}>
              <div className={style.title}>
                <h1>{user.nome}</h1>
                <h3>Time de {user.trilha}</h3>
              </div>
              <ul className={style.info}>
                <li>
                  <TfiCommentAlt size={25}/>
                  <p>Feedbacks</p>
                  <span>{user.feedbacks}</span>
                </li>
                <div className={style.border}></div>
                <li>
                  <LiaMedalSolid size={28}/>
                  <p>Posição</p>
                  <span>{user.ranking_pos}º</span>
                </li>
                <div className={style.border}></div>
                <li>
                  <PiAcornBold size={25}/>
                  <p>Nozes</p>
                  <span>{user.coins}</span>
                </li>
              </ul>
            </section>
            <h2>Feedbacks Recebidos</h2>
            <div className={style.user_feedbacks}>
              {user.feedbacks_recebidos.map((feedback, i) => {
                return <Feedback key={i} feedback={feedback} index={i}/>
              })}
            </div>
        </main>
    </React.Fragment>
  )
}