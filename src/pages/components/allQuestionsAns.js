import { useEffect, useState } from "react";
import QuestionAns from "./questionAns";
import Footer from "./footer";


export default function AllQuestionsAns({ showAnswer,setScore }) {
    const [allDataComponent, setAllDataComponent] = useState(null)
    console.log("inside allQuestionAns"+showAnswer)

    useEffect(() => {
        let ignore = false;
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(data => data.json())
            .then(data => {
                if (!ignore) {
                    setAllDataComponent(data.results)
                }
            })
        return () => { ignore = true }
    }, [])

    return <>
        {allDataComponent ? allDataComponent.map(dataArrayItem => {return <QuestionAns allData={dataArrayItem} key={dataArrayItem["correct_answer"]} showAnswer={showAnswer} setScore={setScore}/>}) : <></>}
    </>
}