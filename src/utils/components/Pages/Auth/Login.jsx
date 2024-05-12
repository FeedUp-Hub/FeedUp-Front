import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Layout/Input";
import style from "./Auth.module.css";

export function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        

        localStorage.setItem("isLogged", "true")
        window.location.href = "/"
    }

    return (
        localStorage.getItem("isLogged") === 'true' ? window.location.href = "/" :
        <main>
            <section className={style.login_container}>
                <img src="/2-removebg-preview.png" alt="feedup logo"/>
                <h1>Bem vindo de volta!</h1>
                <p>Estamos felizes por você estar de volta. Faça login para continuar.</p>
            </section>
            <form onSubmit={handleSubmit} className={style.login}>
                <Input type="text" value={username} onchange={handleUsernameChange}>Usuário</Input>
                <a href="#">Esqueceu seu usuário?</a>
                <Input type="password" value={password} onchange={handlePasswordChange}>Senha</Input>
                <a href="#">Esqueceu sua senha?</a>
                <Input type="submit" value="Login" />
                <p>Ainda sem conta? <Link to="/signin">Cadastre-se já</Link></p>
            </form>
        </main>
    )
}
