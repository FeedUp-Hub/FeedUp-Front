import React from "react"
import Input from "../../../Layout/Input/"
import style from "./Feedback.module.css"

import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";
import { IoSend } from "react-icons/io5";

export function Feedback({feedback, index}){

    const handleCommentChange = (e) => {
        console.log(e.target.value)
    }

    const handleLikeChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className={style.feedback_card} key={feedback.id}>
            <div className={style.card_header}>
                <h3>{feedback.sender_name}</h3>
                <span>{feedback.created_at}</span>
            </div>
            <p><span className={style.mentioned}>@{feedback.receiver_username}</span>{', ' + feedback.message}</p>
            {/* <div className={style.feedback_actions}>
                 {feedback.liked ? <TiHeartFullOutline color="#4c54fc" size={20} cursor="pointer" onClick={handleLikeChange}/> : <TiHeartOutline  size={20} cursor="pointer" onClick={handleLikeChange}/>}
                <Input key={index} type="text" value={feedback.comment} onchange={handleCommentChange}></Input>
                {feedback.comment != "" && <IoSend className={style.send_icon}/>} 
            </div> */}
        </div>
    )
}