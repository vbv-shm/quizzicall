import { useState } from "react";
import AllQuestionsAns from "./components/allQuestionsAns";
import Footer from "./components/footer";

export default function Questions_page(){
    const [showAnswer,setShowAnswer]=useState(false);
    const [score,setScore]=useState(0); 
    console.log(score)
    return <div>
            <AllQuestionsAns showAnswer={showAnswer} setScore={setScore}/>
            <Footer showAnswer={showAnswer} setShowAnswer={setShowAnswer} score={score}/>
        </div>
}