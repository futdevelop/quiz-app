import { Radio } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Options } from '../../components/Options'
import { quizData } from '../../constans/data'
import { setChoosenAnswear } from '../../store/quizSlice'
import { quizSlice } from '../../store/selectors'

export const OptionsContainer = () => {
  const { currQuestion, userAnswears, activatedResults } =
    useSelector(quizSlice)
  const [value, setValue] = useState(0)

  const dispatch = useDispatch()

  const onChange = e => {
    setValue(e.target.value)
  }

  useEffect(() => {
    dispatch(setChoosenAnswear(value))
  }, [value])

  useEffect(() => {
    setValue(0)
  }, [currQuestion])

  return (
    <>
      <Options
        Radio={Radio}
        quizData={activatedResults ? userAnswears : quizData}
        num={currQuestion}
        onChange={onChange}
        value={value}
        correct={activatedResults && quizData[currQuestion].correctAnswer}
        incorrect={activatedResults && quizData[currQuestion].incorrect}
        activatedResults={activatedResults}
      />
    </>
  )
}
