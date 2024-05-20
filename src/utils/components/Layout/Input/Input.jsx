import React from "react"

export function Input({type, children, onchange, value = '', required = false}){
    return (<input type={type} value={value} placeholder={children} onChange={onchange} {...required && 'required'}/>)
}