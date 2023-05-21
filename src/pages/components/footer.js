export default function Footer({setShowAnswer,score,showAnswer}){
    return <><button onClick={(e)=>setShowAnswer(true)}>
        Reveal Answer
    </button>
    {showAnswer?score+"/5":<></>}
    </>
}