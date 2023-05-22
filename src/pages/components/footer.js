export default function Footer({setShowAnswer,score,showAnswer,setValue,setScore}){
    if (!showAnswer){
    return <div className="footer-btn-container"><button className="btn-check" onClick={(e)=>setShowAnswer(true)}>
        Check Answers
    </button></div>}
    else {
    return <div className="footer-btn-container">
    {showAnswer?"You scored "+score+"/5 correct answers":<></>}
    <button className="btn-check" onClick={()=>{setValue((x)=>x+1);setScore(0);setShowAnswer(false)}}>Reset</button>
    </div>}
}