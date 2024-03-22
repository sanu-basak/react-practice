import { useState } from 'react'
import {questionData} from '../utils/questionsData'
import Question from './Question'
import Result from "./Result";


const QuizApp = () => {
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [userAnswer,setUserAnswer] = useState([])

    const handleNextQuestion = (isCorrect) => {
       setCurrentQuestion(currentQuestion+1)
       setUserAnswer([...userAnswer,isCorrect])
    }

    const handleRestQuiz = () => {
        setCurrentQuestion(0)
        setUserAnswer([])
    }

    return (
        <div className='main-container'>
            <h1>Quiz App</h1>
            <Question
                question={questionData[currentQuestion]} 
                questionId={currentQuestion+1} 
                handleNextQuestion={handleNextQuestion}
            />
            {
                currentQuestion === questionData.length &&  
                <Result  
                    userAnswers={userAnswer} 
                    questions={questionData} 
                    resetQuiz={handleRestQuiz}
                />
            }
            
        </div>
    )
}

export default QuizApp