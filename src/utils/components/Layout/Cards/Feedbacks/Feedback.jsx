import React, { useState } from "react"
import Input from "../../../Layout/Input/"
import style from "./Feedback.module.css"
import Cookies from "js-cookie"
import { api } from "../../../../services/api"
import { jwtDecode } from "jwt-decode"

import { TiHeartOutline } from "react-icons/ti"
import { TiHeartFullOutline } from "react-icons/ti"
import { HiAnnotation } from "react-icons/hi"
import { IoSend } from "react-icons/io5"
import { HiOutlineTrash } from "react-icons/hi"
import { json } from "react-router-dom"

export function Feedback({ feedback, index }) {
  const [message, setMessage] = useState("")
  const [liked, setLiked] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState([])
  const token = Cookies.get("token")
  const loggedUsername = jwtDecode(token).username
  const typeUser = jwtDecode(token).typeuser

  const handleDelete = () => {
    console.log("Deleting feedback:", feedback.id)
    api.delete(typeUser === 1 ? `/profile/${feedback.id}` : typeUser === 2 ? `/leader/${feedback.id}` : typeUser === 3 ? `/people/${feedback.id}` : `/home/${feedback.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res.data)
      window.location.reload()
      console.log("Feedback deleted:", feedback.id)
    })
    .catch((err) => console.error(err))
  }

  const handleLikeChange = () => {
    const stateLiked = !liked
    setLiked(stateLiked)
    if(stateLiked) {
      api.post(`/likes/${feedback.id}`, {} , {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data)
        console.log("Like added for feedback:", feedback.id)
      })
      .catch((err) => console.error(err))
    }
    else if (!stateLiked) {
      api.delete(`/likes/${feedback.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data)
        console.log("Like removed for feedback:", feedback.id)
      })
      .catch((err) => console.error(err))
    }
  }

  const handleCommentChange = (e) => {
    setMessage(e.target.value)
  }

  const handleDeleteComment = (commentID) => {
    console.log("Deleting comment:", commentID)
    api.delete(`/comments/${commentID}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res.data)
      setComments(comments.filter((comment) => comment.id !== commentID))
      console.log("Comment deleted:", commentID)
    })
    .catch((err) => console.error(err))
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
    const stateComments = !showComments
    setShowComments(stateComments)
    if (stateComments) {
      api.get(`/comments/${feedback.id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
          console.log(res.data)
          setComments(res.data)
          console.log("Showing comments for feedback:", feedback.id)
      }) 
    }
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
          <TiHeartOutline TiHeartFullOutline size={20} cursor="pointer" onClick={handleLikeChange} />
        )}
        <HiAnnotation size={20} cursor="pointer" onClick={handleShowComments}/>
        <Input key={index} type="text" value={message} onchange={handleCommentChange} />
        {message.trim() !== "" && <IoSend className={style.send_icon} onClick={handleSendComment} />}
        {(jwtDecode(token).sub === feedback.id_usersend || jwtDecode(token).username === feedback.sender_username) && 
          <HiOutlineTrash size={20} cursor="pointer" onClick={handleDelete}/>
        }
      </div>
      {showComments && 
            <ul className={style.comments_list}>
                {comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <p className={style.comment_username}>{comment.username}</p>
                            <p>{comment.message}</p>
                            <span>{( new Date(comment.created_at)).toLocaleTimeString().split(":").slice(0, 2).join(":")}</span>
                            {loggedUsername === comment.username && 
                              <HiOutlineTrash size={20} cursor="pointer" onClick={() => handleDeleteComment(comment.id)}/>
                            }
                        </li>
                    )
                })}
            </ul>
        }
    </div>
  )
}