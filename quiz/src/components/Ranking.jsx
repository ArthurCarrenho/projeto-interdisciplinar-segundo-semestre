import React from "react";
import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import { useState } from "react";
import "./Ranking.css"


function Ranking(){
    const [quizState, dispatch] = useContext(QuizContext)
 
    return(
        <div id="ranking">
            <h1>Ranking</h1>
            <p>Nome: {quizState.name}</p>
            <p>Pontos: {quizState.socre}</p>
        </div>
    )
}

export default Ranking
