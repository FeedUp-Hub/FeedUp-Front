import React, { useState } from "react"
import { Link } from "react-router-dom"
import Input from "../../components/Input"
import style from "./Auth.module.css"
import {api} from "../../services/api"
import Cookies from "js-cookie"

export function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSenhaChange = (e) => {
        setSenha(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email || !senha) {
            alert("Por favor, preencha todos os campos.")
            return
        }
    
        const user = { email: email, password: senha }

        api.post('/', user)
          .then((res) => {
            const data = res.data
            Cookies.set("token", data.token, { expires:  data.expiresIn/24/60/60})
            window.location.href = "/"
          })
          .catch((err) => console.error(err))
    }

    return (
        Cookies.get("token") != undefined ? window.location.href = "/" :
        <main className={style.main}>
            <section className={style.login_container}>
                <img src="/2-removebg-preview.png" alt="feedup logo"/>
                <h1>Bem vindo de volta!</h1>
                <p>Estamos felizes por você estar de volta. Faça login para continuar.</p>
            </section>
            <form onSubmit={handleSubmit} className={style.login} id="login-form">
                <Input type="email" value={email} onchange={handleEmailChange} required={true}  id="login-email">Email</Input>
                <Input type="password" value={senha} onchange={handleSenhaChange} required={true}  id="login-senha">Senha</Input>
                <Link to='/pwd-forget'>Esqueceu sua senha?</Link>
                <Input type="submit" value="Login"  id="login-submit"/>
            </form>
        </main>
    )
}
