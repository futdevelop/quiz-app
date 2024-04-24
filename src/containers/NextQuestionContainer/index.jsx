import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NextQuestion } from '../../components/NextQuestion'
import { quizData } from '../../constans/data'
import {
  defineUserAnswears,
  endQuiz,
  incCurrQuestion,
  incScore,
} from '../../store/quizSlice'
import { quizSlice } from '../../store/selectors'

export const NextQuestionContainer = () => {
  const dispatch = useDispatch()
  const {
    choosenAnswear,
    currQuestion,
    amountOfQuestions,
    userAnswears,
    activatedResults,
  } = useSelector(quizSlice)

  const data = quizData[currQuestion]

  const correctAnswear =
    quizData[currQuestion] && quizData[currQuestion].correctAnswer

  const indexCorrectAnswear =
    quizData[currQuestion] &&
    quizData[currQuestion].options.indexOf(correctAnswear) + 1

  useEffect(() => {
    console.log(userAnswears)
  }, [userAnswears])

  const clickHandle = () => {
    if ((!activatedResults && choosenAnswear !== 0) || choosenAnswear === 0) {
      currQuestion <= amountOfQuestions && dispatch(incCurrQuestion())
      currQuestion === amountOfQuestions - 1 && dispatch(endQuiz())
      indexCorrectAnswear === choosenAnswear && dispatch(incScore())
      if (!activatedResults && indexCorrectAnswear !== choosenAnswear) {
        data.incorrect = data.options[choosenAnswear - 1]
        dispatch(defineUserAnswears(data))
      } else {
        dispatch(defineUserAnswears(data))
      }
    }
  }

  return <NextQuestion Button={Button} clickHandle={clickHandle} />
}
