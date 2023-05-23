
export default function Answer({ answer,selectedOption,setSelectedOption, name, showAnswer, correctAnswer,setScore}) {
    // console.log("answer ran "+showAnswer+" "+value);

    let buttonClass="answer";
    if(showAnswer){
        if(name==correctAnswer){
            buttonClass="answer-correct"
        }
        else if(selectedOption!=correctAnswer && selectedOption==name){
            buttonClass="answer-wrong"
        }
        else{
            buttonClass="answer-not-selected"
        }
    }
    else if(selectedOption==name){buttonClass="answer-selected"}
    return <button disabled={showAnswer} className={buttonClass} onClick={(option)=>setSelectedOption(name)}>
        {answer}
    </button>
}