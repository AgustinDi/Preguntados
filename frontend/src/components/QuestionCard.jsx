import React, { useState } from "react";
import './QuestionCard.css'
import { useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import AnswersCard from "./AnswersCard";

export default function QuestionCard({ setLevel, level, reward, setReward }) {
    const [question, setQuestion] = useState('...')
    const [answers, setAnswers] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [actualReward, setActualReward] = useState(0)

    useEffect(() => {
        async function loadGame() {
            const { data } = await axios.get(`http://localhost:3001/category/${level}`)
            let random = Math.random();
            random = Math.floor(random * 5)
            const info = data[random];
            setQuestion(info.question);
            setAnswers([info.answer1, info.answer2, info.answer3, info.answer4]);
            setCorrectAnswer(info.correctAnswer)
            setActualReward(info.reward)
            return data
        }
        loadGame()
    }, [level])


    function reply(id) {
        if (id === correctAnswer) {
            setReward(actualReward + reward)
            level === 5 ? setLevel(0) : setLevel(level + 1)
            swal(level === 5 ? `Felicitaciones! Te llevas el premio mayor: $1000000` : "Respuesta Correcta!"
                , level === 5 ? `Respondiste todo de forma correcta!` : `Bien hecho!, tu premio actual es de $${actualReward + reward}!!!`
                , "success"
            );
        } else {
            setReward(0)
            setLevel(0)
            swal("Respuesta Incorrecta!"
                , `Perdiste todo el premio :c`
                , "error"
            );
        }
    }

    function retire() {
        swal("Estas seguro de que quieres retirarte?"
            , `Te llevaras todo el premio acumulado.`
            , "warning", {
            dangerMode: true,
            buttons: true,
            closeOnClickOutside: false,
        }).then(r=>{
                if(r === true){
                    setLevel(0)
                    if(reward !== 0) swal("Felicitaciones, ganaste $" + reward, "","success")
                }
        })
    }

    return (
        <div>
            <h3>{question}</h3>
            {
                answers.length === 0
                    ? <p id='cargando'>cargando...</p>
                    : <AnswersCard answers={answers} reply={reply}></AnswersCard>
            }
            {
                actualReward && <div id='downInfo'>
                    <button onClick={retire} className="answerCard">Retirarse</button>
                    <span id='actualReward'>Premio por responder correctamente: ++ ${actualReward}!!!</span>
                </div>
            }
        </div>
    )
}