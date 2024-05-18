import React from "react"
import Input from "../../../Layout/Input/"
import style from "./Feedback.module.css"

import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";
import { IoSend } from "react-icons/io5";

export function Feedback({feedback, handleLike, handleComment, index}){
    return (
        <div className={style.feedback_card} key={index}>
            <div className={style.card_header}>
                <h3>{feedback.author}</h3>
                <span>{feedback.dateTime}</span>
            </div>
            <p>{feedback.text}</p>
            <div className={style.feedback_actions}>
                {feedback.liked ? <TiHeartFullOutline color="#4c54fc" size={20} cursor="pointer" onClick={() => handleLike(feedback.id)}/> : <TiHeartOutline  size={20} cursor="pointer" onClick={() => handleLike(feedback.id)}/>}
                <Input key={index} type="text" value={feedback.comment} onchange={(e) => handleComment(feedback.id, e)}></Input>
                {feedback.comment != "" && <IoSend className={style.send_icon}/>}
            </div>
        </div>
    )
}