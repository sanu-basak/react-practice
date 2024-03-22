const Result = ({userAnswers,questions,resetQuiz}) => {
    const correctAnswer = userAnswers.filter((answer) => answer).length
    return (
        <div className="result">
            <h1>Result</h1>
            <p>You answered {correctAnswer} out {questions.length} questions</p>

            <button onClick={() => resetQuiz()}>Click here to retry</button>
            <ul>
                {
                    questions.map((question,index) => {
                        return <li data-correct={userAnswers[index]} key={index}>Q.{index+1} {question.question}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Result