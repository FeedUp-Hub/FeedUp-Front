import React from "react";
import style from "./Note-Card.module.css";


export function NoteCard({ card }) {
  return (
    <article className={style.note_card}>
      <div className={style.note_card_header}>
        <img className="logo-og" src="/public/7-removebg-preview.png" alt="feedup" />
        <i>×</i>
        <img className="logo-parceira" src="https://portofilmes.com.br/wp-content/uploads/2023/01/ioasys2.png" alt="ioasys" />
      </div>
      <p>{card.description}</p>
      <img className={style.note_card_image} src={card.image} alt="note" />
    </article>
  );
}
