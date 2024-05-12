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
        setNome(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleTrilhaChange = (e) => {
        setTrilha(e.target.value);
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    }

    const handleConfSenhaChange = (e) => {
        setConfSenha(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        


        
        localStorage.setItem("isLogged", "true")
        window.location.href = "/"
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className={style.signin}>
                <Input type="text" value={nome} onchange={handleNomeChange}>Nome</Input>
                <Input type="email" value={email} onchange={handleEmailChange}>Email</Input>
                <Input type="text" value={trilha} onchange={handleTrilhaChange}>Equipe</Input>
                <Input type="text" value={username} onchange={handleUsernameChange}>Usuário</Input>
                <Input type="password" value={senha} onchange={handleSenhaChange}>Senha</Input>
                <Input type="password" value={confSenha} onchange={handleConfSenhaChange}>Confirme a Senha</Input>
                <Input type="submit" value="Registrar" />
                <p>Já tem conta? <Link to="/login">Entre já</Link></p>
            </form>
            <section className={style.signin_container}>
                <img src="/2-removebg-preview.png" alt="feedup logo"/>
                <h1>Crie sua conta!</h1>
                <p>Estamos felizes por ter você aqui. Registre-se para continuar.</p>
            </section>
        </main>
    );
}
