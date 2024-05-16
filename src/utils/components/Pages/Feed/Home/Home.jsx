import React, { useState } from "react"
import Rank from "../../../Layout/Cards/Ranking/"
import style from "./Home.module.css"

import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";



export function Home() {
    const [feedbacksData, setFeedbacksData] = useState([
        {
          id: 1,
          author: "Fernando Santiago",
          dateTime: "2 dias atrás",
          text: "@Giovana, sua liderança no desenvolvimento do aplicativo da Havan foi incrível!  Sua habilidade de coordenar equipes e gerenciar prazos foi essencial para o sucesso do projeto.",
          liked: false,
        },
        {
          id: 2,
          author: "Paula Martins",
          dateTime: "3 dias atrás",
          text: "@Carolina, gostaria de reconhecer sua contribuição no projeto de otimização de processos! ",
          liked: false,
        },
        {
          id: 3,
          author: "Bernardo Alvim",
          dateTime: "4 dias atrás",
          text: "@Gabriela, a criatividade da Gabi na concepção das campanhas de marketing é surreal!!",
          liked: false,
        },
        {
          id: 4,
          author: "Fernando Santiago",
          dateTime: "5 dias atrás",
          text: "@Laura, estou impressionado com sua dedicação aos detalhes! Você realmente faz a diferença na nossa equipe!!",
          liked: false,
        },
        {
          id: 5,
          author: "Isabella Stefanni",
          dateTime: "6 dias atrás",
          text: "@Gabriela, a criatividade da Gabi na concepção das campanhas de marketing é surreal!!",
          liked: false,
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
            

    return (
        <div className={style.container}>
            <aside className={style.feedbacks}>
                {feedbacksData.map((feedback, i) => {
                    return <div className={style.feedback_card}>
                        <div className={style.card_header}>
                            <h3>{feedback.author}</h3>
                            <span>{feedback.dateTime}</span>
                        </div>
                        <p>{feedback.text}</p>
                        {feedback.liked ? <TiHeartFullOutline color="#4c54fc" size={20} cursor="pointer" onClick={() => handleLike(feedback.id)}/> : <TiHeartOutline  size={20} cursor="pointer" onClick={() => handleLike(feedback.id)}/>}
                    </div>
                })}
            </aside>
            <div>
                <h3>Ranking</h3>
                <Rank />
            </div>
        </div>
    )
}