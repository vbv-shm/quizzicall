import Question  from "./question"
import Answers  from "./answers"
import { useEffect,useState } from "react";


export default function QuestionAns({allData,showAnswer,setScore}){
    const [allQAnswers,setallQAnswers]=useState([])
    useEffect(()=>{
        const randomPosition=Math.floor(Math.random()*4);
        const answerArray=[...allData["incorrect_answers"]]
        answerArray.splice(randomPosition,0,allData["correct_answer"]);
        setallQAnswers(answerArray)
    },[])

    return <div className="single-question">
        <Question question={allData["question"]}/>
        <Answers answers={allQAnswers} correctAnswer={allData["correct_answer"]} showAnswer={showAnswer} setScore={setScore}/>
    </div>
}