import { useState } from "react";
import AllQuestionsAns from "../components/allQuestionsAns";
import Footer from "../components/footer";

export default function Questions_page(){
    console.log("rerendered Questionpage")
    const [showAnswer,setShowAnswer]=useState(false);
    const [score,setScore]=useState(0); 
    const [value,setValue]=useState(0);
    const [startQuiz,setStartQuiz]=useState(false)

    if(!startQuiz){
      return <div className="start-quiz-container">
          <div className="quizzical"> Quizzical</div>
          <button onClick={()=>setStartQuiz(true)} className="quizzical-btn">Start Quiz</button>
      </div>
  }
  else{
    return <div className="question-page">
            
            <AllQuestionsAns showAnswer={showAnswer} setScore={setScore} key={value}/>
            <Footer showAnswer={showAnswer} setShowAnswer={setShowAnswer} score={score} setValue={setValue} setScore={setScore} />
            
        </div>}
}