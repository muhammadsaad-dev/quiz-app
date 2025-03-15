import "./App.css"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Quiz from "./pages/Quiz"
import Result from "./pages/Result"
import { QuizProvider } from "./contexts/QuizContext"

function App() {
  return (
    <QuizProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </QuizProvider>
  )
}

export default App
