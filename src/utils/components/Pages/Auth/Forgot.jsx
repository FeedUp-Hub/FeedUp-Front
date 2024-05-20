import React, { useState } from "react";
import Input from "../../Layout/Input";
import style from "./Auth.module.css";

export function Forgot() {
    const [email, setEmail] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email) {
            alert("Por favor, preencha todos os campos.");
            return
        }
    
        
    }

    return (
        localStorage.getItem("loggedUser") ? window.location.href = "/" :
        <main className={style.main}>
            <section className={style.forgot_container}>
                <img src="/2-removebg-preview.png" alt="feedup logo"/>
                <h1>Poxa... Que pena 😓</h1>
                <p>Mas não se preocupe! Enviaremos um email com instruções de como redefinir sua senha.</p>
            </section>
            <form onSubmit={handleSubmit} className={style.forgot} id="forgot-form">
                <label htmlFor="forgot-input-email">Insira seu email para continuarmos: </label>
                <Input type="text" value={email} onchange={handleEmailChange} required={true}  id="forgot-input-email">seu@email.com</Input>
                <Input type="submit" value="Login"  id="forgot-submit"/>
            </form>
        </main>
    )
}
