import React from "react";
import "./Start.css"

export default function Start({ setLevel }) {
    return (
        <div>
            <button onClick={()=>setLevel(1)} id='start'> Iniciar el Juego </button>
        </div>
    )
}