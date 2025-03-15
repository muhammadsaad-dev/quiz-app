import { useState, useMemo } from "react"
import { decode } from "he"
import "../css/Question.css"

function Question({ question, index, Answer, setAnswer }) {
  const answers = useMemo(() => {
    const allAnswers = [question.correct_answer, ...question.incorrect_answers]
    return shuffleArray(allAnswers)
  }, [question])

  // Fisher-Yates Shuffle Algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  return (
    <div className="question-container">
      <h2>Q NO. {index + 1}</h2>
      <p className="question">{decode(question.question)}</p>
      <div className="options">
        {answers.map((answer, idx) => (
          <label key={idx}>
            <input
              value={answer}
              type="radio"
              name={index}
              checked={answer === Answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            {decode(answer)}
          </label>
        ))}
      </div>
    </div>
  )
}

export default Question
