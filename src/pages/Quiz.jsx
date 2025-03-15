import { useState } from "react"
import Question from "../components/Question"
import { useQuiz } from "../contexts/QuizContext"
import { useNavigate } from "react-router-dom"
import "../css/Quiz.css"

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState("")
  const { quizData, setScore } = useQuiz()
  const navigate = useNavigate()

  if (!quizData || quizData.length === 0) return <p>Loading quiz...</p>

  function handleClickNext() {
    if (!answer) return alert("Please select an answer!")
    if (answer === quizData[currentIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1)
    }
    setCurrentIndex((prevIndex) => prevIndex + 1)
    setAnswer("")
  }

  function handleResult() {
    if (!answer) return alert("Please select an answer!")
    if (answer === quizData[currentIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1)
    }
    navigate("/result", { replace: true })
  }

  return (
    <>
      <Question
        question={quizData[currentIndex]}
        index={currentIndex}
        setAnswer={setAnswer}
        Answer={answer}
      />
      {currentIndex === quizData.length - 1 ? (
        <button className="result-btn" onClick={handleResult}>
          Check Result
        </button>
      ) : (
        <button className="next-btn" onClick={handleClickNext}>
          Next
        </button>
      )}
    </>
  )
}

export default Quiz
