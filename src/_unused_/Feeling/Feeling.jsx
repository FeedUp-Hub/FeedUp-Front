import React, { useState } from "react";
import style from "./Feeling.module.css";
import feelings from "./feelings";

export function Feeling() {
    const [tooltip, setTooltip] = useState("")

    const handleMouseEnter = (mood) => {
        setTooltip(mood)
    }

    const handleMouseLeave = () => {
        setTooltip("")
    }

    return (
        <article className={style.feeling_card}>
            <h2 className={style.feeling_title}>Mood do Dia 📆</h2>
            <div className={style.feeling_mojis}>
                {feelings.map((feeling) => (
                    <div
                        key={feeling.name}
                        className={style.feeling_tooltip}
                        onMouseEnter={() => handleMouseEnter(feeling.name)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={feeling.image} alt={feeling.name} />
                        {tooltip === feeling.name && (
                            <span className={style.tooltip_text}>{feeling.name.charAt(0).toUpperCase() + feeling.name.slice(1)}</span>
                        )}
                    </div>
                ))}
            </div>
        </article>
    );
}
