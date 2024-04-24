import React from 'react'
import { quizData } from '../../constans/data'
import { Questions } from '../../components/Questions'
import { useSelector } from 'react-redux'
import { quizSlice } from '../../store/selectors'


export const QuestionsContainer = () => {
  const { currQuestion, amountOfQuestions } = useSelector(quizSlice);

  return (
    <Questions quizData={quizData} num={currQuestion} amount={amountOfQuestions}  />
  )
}
