
const Question = ({ question, questionId, handleNextQuestion }) => {
  return (
    <div className="quiz-container">
      {question ? (
        <>
          <div className="question-container">
            <h1>
              Q{questionId} - {question.question}
            </h1>
          </div>

          <ul className="option-container">
            {question.answerOptions.map((answer,index) => {
              return (
                <li key={index}>
                  <button onClick={() => handleNextQuestion(answer.isCorrect)}>
                    {answer.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
       <></>
      )}
    </div>
  );
};

export default Question;
