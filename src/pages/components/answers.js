import Answer from "./answer"
import { useState } from "react"

export default function Answers({ answers, correctAnswer,showAnswer,setScore }) {

    const [selectedOption,setSelectedOption]=useState(null);
    const [checkScore,setCheckScore]=useState(true)
    if(showAnswer && selectedOption==correctAnswer && checkScore){
        setScore((oldState)=>oldState+1);
        setCheckScore(false)
    }
    return <div className="answers">
        <div ><Answer key="a" name={answers[0]} answer={answers[0]} selectedOption={selectedOption} setSelectedOption={setSelectedOption} showAnswer={showAnswer} correctAnswer={correctAnswer} setScore={setScore}/></div>

        <div > <Answer key="b" name={answers[1]} answer={answers[1]} selectedOption={selectedOption} setSelectedOption={setSelectedOption} showAnswer={showAnswer} correctAnswer={correctAnswer} setScore={setScore}/></div>

        <div > <Answer key="c" name={answers[2]} answer={answers[2]} selectedOption={selectedOption} setSelectedOption={setSelectedOption} showAnswer={showAnswer} correctAnswer={correctAnswer} setScore={setScore}/></div>

        <div > <Answer key="d" name={answers[3]} answer={answers[3]} selectedOption={selectedOption} setSelectedOption={setSelectedOption} showAnswer={showAnswer} correctAnswer={correctAnswer} setScore={setScore}/></div>
        
    </div>
}