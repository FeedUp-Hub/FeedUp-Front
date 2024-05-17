import React, { useState } from "react"
import Input from "../../../Layout/Input"
import style from "./PostFeed.module.css"
import valores from "../../../../services/valores"

export function PostFeed(){
    const [mention, setMention] = useState("")

    const handleMentionChange = (e) => {
        setMention(e.target.value)
    }

    const renderOption = (valor) => {
        return (
            <option key={valor.id} value={valor.id}>
                {valor.value}
            </option>
        )
    }

    return(
        <div className={style.postFeed}>
            <section className={style.post_container}>
                <img src="/2-removebg-preview.png" alt="feedup logo" onClick={() => window.location.href = '/'}/>
                <h2>Deixe um feedback para outro colaborador</h2>
                <p>Espalhe o reconhecimento! Deixe um feedback, positivo ou construtivo, para um colaborador da sua equipe com base nos valores da empresa.</p>
            </section>
            <form>
                <Input id="post-feedup-mencao" type="text" value={mention} onchange={handleMentionChange} required={true}>Menção</Input>
                <select name="valor" id="post-feedup-valor" required >{valores.map(renderOption)}</select>
                <textarea required name="post-feedup-feedback" cols="30" rows="10" placeholder="Deixe seu feedback aqui..." maxLength="250" id="post-feedup-feedback"></textarea>
                <div>
                    <Input id="post-feedup-visualizacao" type="checkbox"/>
                    <label htmlFor="post-feedup-visualizacao">Postar Anônimo</label>
                </div>
                <Input id="post-feedup-submit" type="submit" value="Enviar Feedback"/>
            </form>
        </div>
    )
}