import React, { useState } from "react"
import Input from "../../../Layout/Input"
import style from "./PostFeed.module.css"
import { RxCrossCircled } from "react-icons/rx"

export function PostFeed(){

    const valores = [
        { id: 1, value: "Se importa e cuida de todas as pessoas da comunidade." },
        { id: 2, value: "Tem a capacidade de dialogar com pares, liderados e lideranças sobre estratégias, metas e o que é necessário para alcançá-las." },
        { id: 3, value: "Reconhece, respeita e empodera o bom trabalho e empenho dos colegas em todas as esfera." },
        { id: 4, value: "Aposta na ideia que estar na ioasys significa transformar o mundo." },
        { id: 5, value: "Traz as melhores práticas do mercado para dentro da ioasys, tornando-as ainda melhores dentro do nosso ecossistema." },
        { id: 6, value: "Conduz a comunidade na direção do sucesso, sempre com muito engajamento e brilho no olho." },
        { id: 7, value: "Ajuda as pessoas a desenvolverem ainda mais as suas soft skills" },
        { id: 8, value: "Se torna técnica e profissionalmente a cada dia mais forte." },
        { id: 9, value: "Mensura e acompanha todas as etapas de projetos e processos para garantir ajustes rápidos." },
        { id: 10, value: "Busca conhecer e agir de forma ética, respeitando todos os princípios de governança da ioasys e do grupo Alpargatas" },
        { id: 11, value: "Busca tornar os caminhos mais simples para obter resultados mais assertivos." },
        { id: 12, value: "É brilhante na tratativa de relacionamento com os clientes, fornecedores e outros cocriadores." },
        { id: 13, value: "Zela por um ambiente que abrace a diversidade e a pluralidade integralmente." },
        { id: 14, value: "Assume a responsabilidade de que sua jornada pessoal e comportamento ajudam a construir a ioasys que todos queremos ter." },
        { id: 15, value: "Entende que inovação deve estar presente em tudo, desde um simples texto até os projetos mais complexos." },
        { id: 16, value: "Entende que sustentabilidade não é só sobre ecologia, mas sim todos os aspectos que regem nossas vidas." },
        { id: 17, value: "Performa de forma surpreendente e acima do esperado." },
        { id: 18, value: "Possui conhecimento técnico notável e compartilha com as pessoas, tornando toda comunidade mais forte." },
        { id: 19, value: "Prioriza os ritos ágeis em todas as ações do dia a dia." },
        { id: 20, value: "Acredita 100% na liberdade para errar e aprender." },
        { id: 21, value: "Acredita no poder do desenvolvimento pessoal e no aprendizado contínuo." },
        { id: 22, value: "Ajuda a construir um ambiente de trabalho cada dia mais agradável e produtivo." },
        { id: 23, value: "Sempre fomenta novas experiências para surpreender os clientes nas entregas." }
    ]

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
            <RxCrossCircled size={25} className={style.close}/>
            <h2>Deixe um feedback para outro colaborador</h2>
            <p>Espalhe o reconhecimento! Deixe um feedback, positivo ou construtivo, para um colaborador da sua equipe com base nos valores da empresa.</p>
            <form>
                <Input id="post-feedup-mencao" type="text" value={mention} onchange={handleMentionChange}>Menção</Input>
                <select name="valor" id="post-feedup-valor" required>{valores.map(renderOption)}</select>
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