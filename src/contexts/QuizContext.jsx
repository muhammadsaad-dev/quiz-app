import { createContext, useContext, useState } from "react"

const QuizContext = createContext()

export const useQuiz = () => useContext(QuizContext)

export function QuizProvider({ children }) {
  const [quizData, setQuizData] = useState([])
  const [score, setScore] = useState(0)

  return (
    <QuizContext.Provider
      value={{
        quizData,
        setQuizData,
        score,
        setScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
