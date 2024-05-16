import React, { useState } from "react";
import NoteCard from "../../Layout/Cards/Notes";

import img1 from "/public/7-removebg-preview.png";
import img2 from "/public/7-removebg-preview.png";
import img3 from "/public/7-removebg-preview.png";
import img4 from "/public/7-removebg-preview.png";

import style from "./Notes.module.css"

export function Notes() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const cards = [
    { description: "Feedup é uma plataforma desenvolvida para feedback entre colaboradores", image: img1 },
    { description: "A realização de feedbacks pelo Feedup não tem o intuito de descartar avaliações formais de desempenho", image: img2 },
    { description: "Feedbacks construtivos são incentivados, mas procure sempre manter o respeito com outros colaboradores", image: img3 },
    { description: "Engajar com os feedbacks te proporciona bonificações e maior prestígio na plataforma", image: img4 },
  ]

  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1)
    }
    else if (currentCardIndex == cards.length - 1) {
        window.location.href = '/feedup'
    }
  }

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => prevIndex - 1)
    }
  }

  return (
    <div className={style.notes}>
        <NoteCard card={cards[currentCardIndex]} />
        <div className={style.nav_container}>
            <button className={style.navigate} onClick={handlePreviousCard} disabled={currentCardIndex === 0}>
                ⟨
            </button>
            <button className={style.navigate} onClick={handleNextCard}>
                ⟩
            </button>
        </div>
    </div>
  )
}
