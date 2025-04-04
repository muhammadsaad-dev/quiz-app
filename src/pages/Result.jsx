import { useNavigate } from "react-router-dom"
import { useQuiz } from "../contexts/QuizContext"
import "../css/Result.css"

function Result() {
  const { score, quizData } = useQuiz()
  const navigate = useNavigate()
  return (
    <>
      <div className="result">
        <h2>Your Result:</h2>
        <p>
          You got {score} correct out of {quizData.length}
        </p>
        <p>Percentage: {Math.round((score / quizData.length) * 100)}%</p>
      </div>
      <button
        className="playagain-button"
        onClick={() => {
          navigate("/")
        }}
      >
        Play Again
      </button>
    </>
  )
}

export default Result
