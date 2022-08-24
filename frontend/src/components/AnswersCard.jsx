import React from "react";
import '../App.css';
import './AnswersCard.css'

export default function AnswersCard ({ answers, reply, actualReward }) {
    return(
        <div id='cardsContainer'>
            { answers && answers.map((r,i)=><button onClick={()=>reply(++i)} key={i} className='answerCard'>{r}</button>)}
        </div>
    )
}