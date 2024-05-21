import React, { useState } from "react"
import Input from "../../../Layout/Input/"
import style from "./Feedback.module.css"
import Cookies from "js-cookie"
import { api } from "../../../../services/api"

import { TiHeartOutline } from "react-icons/ti"
import { TiHeartFullOutline } from "react-icons/ti"
import { HiAnnotation } from "react-icons/hi"
import { IoSend } from "react-icons/io5"

export function Feedback({ feedback, index }) {
  const [message, setMessage] = useState("")
  const [liked, setLiked] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState([])
  const token = Cookies.get("token")

  const handleLikeChange = () => {
    setLiked(!liked) // Toggle like state
    // Implement API call for like functionality here (optional)
    console.log("Like clicked for feedback:", feedback.id)
  }

  const handleCommentChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSendComment = () => {
    if (message.trim() !== "") {
      
        api.post(`/comments/${feedback.id}`, {message: message}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .catch((err) => console.error(err))

        console.log("Sending comment:", message, "for feedback:", feedback.id)
        setMessage("")
    }
  }

  const handleShowComments = () => {
    api.get(`/comments/${feedback.id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        setComments(res.data)
        console.log("Showing comments for feedback:", feedback.id)
    })
    setShowComments(!showComments)
  }


  const postDate = new Date(feedback.created_at).toLocaleTimeString().split(":").slice(0, 2).join(":")

  return (
    <div className={style.feedback_card} key={feedback.id}>
      <div className={style.card_header}>
        <h3>{feedback.sender_name}</h3>
        <span>{postDate}</span>
      </div>
      <p>
        <span className={style.mentioned}>@{feedback.receiver_username}</span>, {feedback.message}
      </p>
      <div className={style.feedback_actions}>
        {liked ? (
          <TiHeartFullOutline color="#4c54fc" size={20} cursor="pointer" onClick={handleLikeChange} />
        ) : (
          <TiHeartOutline size={20} cursor="pointer" onClick={handleLikeChange} />
        )}
        <HiAnnotation size={20} cursor="pointer" onClick={handleShowComments}/>
        <Input key={index} type="text" value={message} onchange={handleCommentChange} />
        {message.trim() !== "" && <IoSend className={style.send_icon} onClick={handleSendComment} />}
      </div>
      {showComments && 
            <ul className={style.comments_list}>
                {comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.username}</p>
                            <p>{comment.message}</p>
                            <span>{( new Date(comment.created_at)).toLocaleTimeString().split(":").slice(0, 2).join(":")}</span>
                        </li>
                    )
                })}
            </ul>
        }
    </div>
  )
}