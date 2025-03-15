import { useState } from "react"
import "../css/Home.css"
import { useQuiz } from "../contexts/QuizContext"
import { getQuestions } from "../services/api"
import { useNavigate } from "react-router-dom"

function Home() {
  const [amount, setAmount] = useState(10)
  const [category, setCategory] = useState(0)
  const [difficulty, setDifficulty] = useState(0)
  const [type, setType] = useState("")
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const { setQuizData, setScore } = useQuiz()

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setScore(0)
    setLoading(true)
    try {
      const data = await getQuestions(amount, category, difficulty, type)
      setQuizData(data)
      navigate("/quiz")
    } catch (err) {
      setError("Could not fetch quiz data")
      console.log(err)
      setLoading(false)
    }
  }

  return (
    <>
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : (
        <>
          <h2 className="welcome-message">Welcome to my Quiz game</h2>
          <p className="form-message">
            Please fill the form below and start game
          </p>
          <form onSubmit={handleSubmit}>
            <label>
              Enter the number of questions:
              <input
                className="home-input"
                type="number"
                min={1}
                max={50}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </label>
            <label>
              Category:
              <select
                className="home-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value={null}>Any Category</option>
                <option value={9}>General Knowledge</option>
                <option value={10}>Books</option>
                <option value={11}>Films</option>
                <option value={12}>Music</option>
                <option value={13}>Musical & Theatres</option>
                <option value={14}>Television</option>
                <option value={15}>Video Games</option>
                <option value={16}>Board Games</option>
                <option value={17}>Science & Nature</option>
                <option value={18}>Computers</option>
                <option value={19}>Mathematics</option>
                <option value={20}>Mythology</option>
                <option value={21}>Sports</option>
                <option value={22}>Geography</option>
                <option value={23}>History</option>
                <option value={24}>Politics</option>
                <option value={25}>Arts</option>
                <option value={26}>Celebrities</option>
                <option value={27}>Animals</option>
                <option value={28}>Vehicles</option>
                <option value={29}>Comics</option>
                <option value={30}>Gadgets</option>
                <option value={31}>Anime & Manga</option>
                <option value={32}>Cartoons and Animations</option>
              </select>
            </label>
            <label>
              Difficulty:
              <select
                className="home-select"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value={null}>Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
            <label>
              Type:
              <select
                className="home-select"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value={null}>Any Type</option>
                <option value="multiple">MCQ</option>
                <option value="boolean">True/False</option>
              </select>
            </label>
            <button type="submit">Start Quiz</button>
          </form>
        </>
      )}
    </>
  )
}

export default Home
