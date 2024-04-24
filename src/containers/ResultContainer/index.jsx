import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ResultBlock } from '../../components/ResultsBlock'
import {
  activeResults,
  incScore,
  restartQuiz,
  toMainLobby,
} from '../../store/quizSlice'
import { quizSlice } from '../../store/selectors'

export const ResultContainer = () => {
  const { score, amountOfQuestions } = useSelector(quizSlice)
  const results = ['лох', 'харош', 'програміст', 'чітер']
  const price =
    score > 10
      ? `Ти ${results[3]}`
      : score <= 3
      ? `Ти ${results[0]}`
      : score <= 6
      ? `Ти ${results[1]}`
      : score <= 10 && `Ти ${results[2]}`

  const status = score <= 3 ? 'exception' : score == 10 ? 'success' : 'normal'

  const dispatch = useDispatch()

  function restartQuizz() {
    dispatch(restartQuiz())
  }

  const comeBackMainLobby = () => {
    dispatch(toMainLobby())
  }

  const handleTrick = () => {
    dispatch(incScore())
  }

  const activeResultsFunc = () => {
    dispatch(activeResults())
  }

  return (
    <ResultBlock
      score={score}
      price={price}
      amount={amountOfQuestions}
      status={status}
      restartQuizz={restartQuizz}
      comeBackMainLobby={comeBackMainLobby}
      handleTrick={handleTrick}
      activeResultsFunc={activeResultsFunc}
    />
  )
}
