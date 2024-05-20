import React, { useState } from "react"
import Rank from "../../../Layout/Cards/Ranking/"
import style from "./Home.module.css"
import Feedback from "../../../Layout/Cards/Feedbacks/"

export function Home() {
  const [feedbacksData, setFeedbacksData] = useState([
    {
      id: 1,
      author: "Fernando Santiago",
      dateTime: "2 dias atrás",
      text: "@Giovana, sua liderança no desenvolvimento do aplicativo da Havan foi incrível!  Sua habilidade de coordenar equipes e gerenciar prazos foi essencial para o sucesso do projeto.",
      liked: false,
      comment: "",
    },
    {
      id: 2,
      author: "Paula Martins",
      dateTime: "3 dias atrás",
      text: "@Gustavo, gostaria de reconhecer sua contribuição no projeto de otimização de processos! ",
      liked: false,
      comment: "",
    },
    {
      id: 3,
      author: "Bernardo Alvim",
      dateTime: "4 dias atrás",
      text: "@Giovana, a criatividade da Gio na concepção das campanhas de marketing é surreal!!",
      liked: false,
      comment: "",
    },
    {
      id: 4,
      author: "Fernando Santiago",
      dateTime: "5 dias atrás",
      text: "@Laura, estou impressionado com sua dedicação aos detalhes! Você realmente faz a diferença na nossa equipe!!",
      liked: false,
      comment: "",
    },
    {
      id: 5,
      author: "Isabella",
      dateTime: "6 dias atrás",
      text: "@Paula, a criatividade da Paulinha na concepção das campanhas de marketing é surreal!!",
      liked: false,
      comment: "",
    },
  ])

  const handleLike = (feedbackId) => {
    const updatedFeedbacks = feedbacksData.map((feedback) => {
      if (feedback.id === feedbackId) {
        return {
          ...feedback,
          liked: !feedback.liked,
        }
      }
      return feedback;
    })
    setFeedbacksData(updatedFeedbacks)
  }
      
  const handleComment = (feedbackId, e) => {
    const updatedFeedbacks = feedbacksData.map((feedback) => {
      if (feedback.id === feedbackId) {
        return {
          ...feedback,
          comment: e.target.value,
        }
      }
      return feedback;
    })
    setFeedbacksData(updatedFeedbacks)
  }
  

  return (
    <div className={style.container}>
        <aside className={style.feedbacks}>
            <h3>Feedups enviados</h3>
            {feedbacksData.map((feedback, i) => {
                return <Feedback key={i} feedback={feedback} index={i} handleComment={handleComment} handleLike={handleLike}/>
            })}
        </aside>
        <div className={style.div_rank}>
            <h3>Ranking</h3>
            <Rank />
        </div>
    </div>
  )
}