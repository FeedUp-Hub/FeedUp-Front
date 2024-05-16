import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Layout/Input";
import style from "./Auth.module.css";

export function Login() {
    const [username, setUsername] = useState("")
    const [senha, setSenha] = useState("")

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleSenhaChange = (e) => {
        setSenha(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!nome || !senha) {
            alert("Por favor, preencha todos os campos.");
            return
        }
    
        const Users = JSON.parse(localStorage.getItem("users")) || []
    
        const foundUser = Users.find(
            (user) => user.username === username
        )
    
        if (foundUser) {
            if (foundUser.senha === senha) {
                localStorage.setItem("loggedUser", username)
                localStorage.setItem("loggedUser", JSON.stringify(username))
                console.log("Login bem sucedido")
                window.location.href = "/"
            }
            else {
                alert("Senha incorreta")
            }
        } else {
            alert("Usuário não encontrado")
        }
    }

    return (
        localStorage.getItem("loggedUser") ? window.location.href = "/" :
        <main className={style.main}>
            <section className={style.login_container}>
                <img src="/2-removebg-preview.png" alt="feedup logo"/>
                <h1>Bem vindo de volta!</h1>
                <p>Estamos felizes por você estar de volta. Faça login para continuar.</p>
            </section>
            <form onSubmit={handleSubmit} className={style.login} id="login-form">
                <Input type="text" value={username} onchange={handleUsernameChange}  id="login-username">Usuário</Input>
                <a href="#" id="login-user-forget">Esqueceu seu usuário?</a>
                <Input type="senha" value={senha} onchange={handleSenhaChange}  id="login-senha">Senha</Input>
                <a href="#"  id="login-senha-forget">Esqueceu sua senha?</a>
                <Input type="submit" value="Login"  id="login-submit"/>
                <p>Ainda sem conta? <Link to="/signin">Cadastre-se já</Link></p>
            </form>
        </main>
    )
}
