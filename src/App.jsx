import { Button } from 'antd'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { NextQuestionContainer } from './containers/NextQuestionContainer'
import { OptionsContainer } from './containers/OptionsContainer'
import { ProgressBarContainer } from './containers/ProgressBarContainer'
import { ResultContainer } from './containers/ResultContainer'
import { QuestionsContainer } from './containers/questionsContainer'
import { startQuiz } from './store/quizSlice'
import { quizSlice } from './store/selectors'

function App() {
  const { isQuizStarted, isQuizEnded } = useSelector(quizSlice)
  const dispatch = useDispatch()

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemProgress = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const itemQuestions = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }
  const itemOptions = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const itemNextQuestion = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  if (isQuizEnded) {
    return <ResultContainer />
  } else if (isQuizStarted) {
    return (
      <>
        <div className='flex justify-center items-center w-[100vw] h-[100vh] '>
          <motion.div
            variants={container}
            initial='hidden'
            animate='visible'
            className='container w-[600px] h-[600px]'
          >
            <motion.div className='item' variants={itemProgress}>
              <ProgressBarContainer />
            </motion.div>
            <motion.div className='item' variants={itemQuestions}>
              <QuestionsContainer />
            </motion.div>
            <motion.div className='item' variants={itemOptions}>
              <OptionsContainer />
            </motion.div>
            <motion.div className='item' variants={itemNextQuestion}>
              <NextQuestionContainer />
            </motion.div>
          </motion.div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 2 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className='flex w-[100vw] h-[100vh] justify-center items-center'
        >
          <Button
            type='primary'
            size='large'
            shape='round'
            onClick={() => dispatch(startQuiz())}
          >
            Start Quiz
          </Button>
        </motion.div>
      </>
    )
  }
}

export default App
