export default function Question({question}) {
    // console.log(question)
    return <div className="question">
        {question.replace(/&quot;|&#039;/g, "'")}
    </div>
}