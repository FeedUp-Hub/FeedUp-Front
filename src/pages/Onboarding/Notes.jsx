import React, { useState } from "react";
import Cookies from "js-cookie";
import NoteCard from "../../components/Cards/Notes";

import img1 from "../../assets/initial notes/img1.png";
import img2 from "../../assets/initial notes/img2.png";
import img3 from "../../assets/initial notes/img3.png";
import img4 from "../../assets/initial notes/img4.png";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

import style from "./Notes.module.css"

export function Notes() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [termsAccepted, setTermsAccepted] = useState(false)

  const cards = [
    { description: "Feedup é uma plataforma desenvolvida para feedback entre colaboradores", image: img1 },
    { description: "A realização de feedbacks pelo Feedup não tem o intuito de descartar avaliações formais de desempenho", image: img2 },
    { description: "Feedbacks construtivos são incentivados, mas procure sempre manter o respeito com outros colaboradores", image: img3 },
    { description: "Engajar com os feedbacks te proporciona bonificações e maior prestígio na plataforma", image: img4 },
  ]

  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1)
    } else if (currentCardIndex === cards.length - 1 && termsAccepted) {
      localStorage.setItem("termsAccepted", true)
      window.location.href = "/feedup"
    } else if (currentCardIndex === cards.length - 1 && !termsAccepted) {
      alert("Você precisa aceitar os termos de uso para continuar.")
    }
  }

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setTermsAccepted(false)
      setCurrentCardIndex((prevIndex) => prevIndex - 1)
    }
  }

  const handleTermsAcceptance = () => {
    setTermsAccepted(!termsAccepted)
  }

  return (
    Cookies.get("token") == undefined ? window.location.href = "/" :
    <div className={style.notes}>
      <NoteCard card={cards[currentCardIndex]} />
      <div className={style.nav_container} style={{ flexDirection: currentCardIndex === 0 ? "row-reverse" : "row" }}>
        <button className={style.navigate} onClick={handlePreviousCard} style={{ display: currentCardIndex === 0 ? "none" : "block" }}>
          <IoIosArrowRoundBack size={40} />
        </button>
        {currentCardIndex === cards.length - 1 && (
            <label htmlFor="terms_checkbox" className={style.terms_confirm}>
              <input type="checkbox" id="terms_checkbox" onChange={handleTermsAcceptance} />
              Li e aceito os termos de uso
            </label>
        )}
        <button className={style.navigate} onClick={handleNextCard}>
          <IoIosArrowRoundForward size={40} />
        </button>
      </div>
    </div>
  )
}
