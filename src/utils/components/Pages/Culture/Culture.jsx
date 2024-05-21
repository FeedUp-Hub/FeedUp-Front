import React from "react"
import style from "./Culture.module.css"
import valores from "../../../services/valores"
import Navbar from "../../Layout/Navbar"
import isys_logo from "../../../../assets/partner-logo.png"
import Cookies from "js-cookie"

export function Culture() {
  return (
    Cookies.get("token") == undefined ? window.location.href = "/" :
    <React.Fragment>
        <Navbar/>
        <img className={style.partner_logo} src={isys_logo} alt="" />
        <p className={style.description}>
            A ioasys é uma empresa de pessoas para pessoas, buscamos sempre garantir uma cultura de trabalho fidedigna disso, através de nossos valores.
            <br />
            <span className={style.lbl}>Quais são os comportamentos que compartilhamos?</span>
        </p>
        <main className={style.culture}>
            {valores.map((valor) => {
                return (
                    <div className={style.card_valor} key={valor.id}>
                        <img src={valor.image} alt={valor.id + ': ' + valor.value} />
                        <p>{valor.value}</p>
                    </div>
                )
            })}
        </main>
    </React.Fragment>
  )
}
