import React from "react";
import "./NavBar.css"

export default function NavBar({level, reward, setLevel, setReward}) {
    return (
        <div className='space-between' id='navbar'>
            <p id='title'>Trivia Millonaria!</p>
            <div className='space-between' id='right'>
                {
                    level !== 0 && <p id='level'>Nivel: {level}</p>
                }
                <button id='reload' onClick={()=>setLevel(0)}><img src="https://res.cloudinary.com/agustindi/image/upload/v1661309509/Portfolio/icons8-actualizar-50_obuuuy.png" alt='reload'></img></button>
                <p>${reward}</p>
            </div>
        </div>
    )
}