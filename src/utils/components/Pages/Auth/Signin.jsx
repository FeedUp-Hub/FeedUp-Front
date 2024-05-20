import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Layout/Input";
import style from "./Auth.module.css";

export function Signin() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [trilha, setTrilha] = useState("")
    const [username, setUsername] = useState("")
    const [senha, setSenha] = useState("")
    const [confSenha, setConfSenha] = useState("")

    const handleNomeChange = (e) => {
        setNome(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleTrilhaChange = (e) => {
        setTrilha(e.target.value)
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleSenhaChange = (e) => {
        setSenha(e.target.value)
    }

    const handleConfSenhaChange = (e) => {
        setConfSenha(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
      
        if (!nome || !email || !trilha || !username || !senha || !confSenha) {
          alert("Por favor, preencha todos os campos.");
          return
        }
      
        if (senha !== confSenha) {
          alert("As senhas não coincidem. Por favor, verifique.");
          return
        }
      
        const newUser = {
            nome,
            email,
            trilha,
            username,
            senha,
            confSenha
        }
      
        let existingUsers = JSON.parse(localStorage.getItem("users")) || []
      
        existingUsers.push(newUser)

        localStorage.setItem("users", JSON.stringify(existingUsers))
        localStorage.setItem("loggedUser", JSON.stringify(newUser.username))

        setNome("")
        setEmail("")
        setTrilha("")
        setUsername("")
        setSenha("")
        setConfSenha("")

        console.log("Usuário criado com sucesso!")
        window.location.href = "/notes"
    }

    return (
        <main className={style.main}>
            <form onSubmit={handleSubmit} className={style.signin} id="cadastro-form">
                <Input type="text" value={nome} onchange={handleNomeChange} required={true} id="cadastro-nome">Nome</Input>
                <Input type="email" value={email} onchange={handleEmailChange} required={true} id="cadastro-email">Email</Input>
                <Input type="text" value={trilha} onchange={handleTrilhaChange} required={true} id="cadastro-trilha">Equipe</Input>
                <Input type="text" value={username} onchange={handleUsernameChange} required={true} id="cadastro-username">Usuário</Input>
                <Input type="password" value={senha} onchange={handleSenhaChange} required={true} id="cadastro-senha">Senha</Input>
                <Input type="password" value={confSenha} onchange={handleConfSenhaChange} required={true} id="cadastro-confsenha">Confirme a Senha</Input>
                <Input type="submit" value="Registrar" id="cadastro-submit"/>
                <p>Já tem conta? <Link to="/login">Entre já</Link></p>
            </form>
            <section className={style.signin_container}>
                <img src="/2-removebg-preview.png" alt="feedup logo"/>
                <h1>Crie sua conta!</h1>
                <p>Estamos felizes por ter você aqui. Registre-se para continuar.</p>
            </section>
        </main>
    )
}
