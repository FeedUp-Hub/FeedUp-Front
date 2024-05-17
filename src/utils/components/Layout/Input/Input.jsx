import React from "react"

export function Input({type, children, required, onchange, value = ''}){
    return (<input type={type} value={value} placeholder={children} onChange={onchange} {...required && 'required'}/>)
}