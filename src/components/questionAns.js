import Question  from "./question"
import Answers  from "./answers"
import { useEffect,useState } from "react";


export default function QuestionAns({allData,showAnswer,setScore}){
    const [allAnswers,setallAnswers]=useState('')
    const [question,setQuestion]=useState('')
    const [correctAns,setcorrectAns]=useState('')

    useEffect(()=>{
        const randomPosition=Math.floor(Math.random()*4);
        const answerArray=[...allData["incorrect_answers"]]
        answerArray.splice(randomPosition,0,allData["correct_answer"]);
        setallAnswers(answerArray)
        setQuestion(allData["question"])
        setcorrectAns(allData["correct_answer"])
    },[])


    return <div className="single-question">
        <Question question={question}/>
        <Answers answers={allAnswers} correctAnswer={correctAns} showAnswer={showAnswer} setScore={setScore}/>
        <div className="border-btm"></div>
    </div>
}