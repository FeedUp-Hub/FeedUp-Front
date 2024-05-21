import React, { useState, useEffect } from "react"
import Input from "../../../Layout/Input"
import style from "./PostFeed.module.css"
import valores from "../../../../services/valores"
import nozes_feedback from "../../../../../assets/nozes_feedback.png"
import Cookies from "js-cookie"
import {api} from "../../../../services/api"
import {jwtDecode} from "jwt-decode"

export function PostFeed(){
    const [mention, setMention] = useState("")
    const [submitted, setSubmitted] = useState(false);

    const handleMentionChange = (e) => {
        setMention(e.target.value)
    }

    const renderOption = (valor) => {
        return (
            <option key={valor.id} value={valor.value}>
                {valor.value}
            </option>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const token = Cookies.get("token")

        if (!mention || !document.getElementById("post-feedup-valor").value || !document.getElementById("post-feedup-feedback").value){
            alert("Preencha todos os campos antes de enviar o feedback")
            return
        }

        if (mention === jwtDecode(token).username){
            alert("Você não pode mencionar a si mesmo")
            return
        }
        
        const body = {
            username_userreceived: mention,
            value: document.getElementById("post-feedup-valor").value,
            isconstructive: document.getElementById("post-feedup-construtive").checked,
            isanonymous: document.getElementById("post-feedup-visualizacao").checked,
            message: document.getElementById("post-feedup-feedback").value,
        }

        api.post('/forms', body, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .catch((err) => {
            err.response.status === 404 ? alert("Você não pode mencionar alguém que não existe") : console.error(err)
        })

        console.log("Feedup submitted!")
        setSubmitted(true)
      }
    
    useEffect(() => {
      if (submitted) {
        setTimeout(() => {
          window.location.href = "/";
        }, 2000)
      }
    }, [submitted])

    return(
        Cookies.get("token") == undefined ? window.location.href = "/" :
        <div className={style.postFeed}>
            <section className={style.post_container}>
                {submitted ? (
                <>
                    <img src="/7-removebg-preview.png" className={style.logo}  alt="feedup logo" onClick={() => (window.location.href = "/")} />
                    <h2>Obrigado pelo feedback!</h2>
                    <img src={nozes_feedback} className={style.nozes_feedback} alt="Thanks for feedback" />
                </>
                ) : (
                <>
                    <img src="/7-removebg-preview.png" className={style.logo} alt="feedup logo" onClick={() => (window.location.href = "/")} />
                    <h2>Deixe um feedback para outro colaborador</h2>
                    <p>Espalhe o reconhecimento! Deixe um feedback, positivo ou construtivo, para um colaborador da sua equipe com base nos valores da empresa.</p>
                </>
                )}
            </section>
            <form onSubmit={handleSubmit}>

                <div className={style.toggle}>
                    <input type="radio" name="feedup-type" value="worth" id="post-feedup-worth" checked={true}/>
                    <label htmlFor="post-feedup-worth">Reconhecimento</label>

                    <input type="radio" name="feedup-type" value="construtive" id="post-feedup-construtive"/>
                    <label htmlFor="post-feedup-construtive">Construtivo</label>
                </div>

                <Input id="post-feedup-mencao" type="text" value={mention} onchange={handleMentionChange} required={true}>Menção</Input>
                <select name="valor" id="post-feedup-valor" required >{valores.map(renderOption)}</select>
                <textarea required name="post-feedup-feedback" cols="30" rows="10" placeholder="Deixe seu feedback aqui..." maxLength="250" id="post-feedup-feedback"></textarea>
                <div>
                    <input id="post-feedup-visualizacao" type="checkbox"/>
                    <label htmlFor="post-feedup-visualizacao">Postar Anônimo</label>
                </div>
                <Input id="post-feedup-submit" type="submit" value="Enviar Feedback"/>
            </form>
        </div>
    )
}