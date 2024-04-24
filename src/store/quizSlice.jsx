import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isQuizStarted: false,
  currQuestion: 0,
  score: 0,
  choosenAnswear: 0,
  isQuizEnded: false,
  amountOfQuestions: 10,
  activatedResults: false,
  userAnswears: [],
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: state => {
      state.isQuizStarted = true
    },
    incCurrQuestion: state => {
      state.currQuestion = state.currQuestion + 1
    },
    incScore: state => {
      state.score = state.score + 1
    },
    setChoosenAnswear: (state, action) => {
      state.choosenAnswear = action.payload
    },
    endQuiz: state => {
      state.isQuizEnded = true
    },
    restartQuiz: state => {
      state.isQuizStarted = true
      state.isQuizEnded = false
      state.currQuestion = 0
      state.score = 0
    },
    toMainLobby: state => {
      state.isQuizEnded = false
      state.isQuizStarted = false
      state.currQuestion = 0
      state.score = 0
    },
    activeResults: state => {
      state.activatedResults = true
      state.isQuizStarted = true
      state.isQuizEnded = false
      state.currQuestion = 0
    },
    defineUserAnswears: (state, action) => {
      state.userAnswears = [...state.userAnswears, action.payload]
    },
  },
})

const { actions, reducer } = quizSlice
export default reducer

export const {
  startQuiz,
  incCurrQuestion,
  incScore,
  setChoosenAnswear,
  endQuiz,
  restartQuiz,
  toMainLobby,
  activeResults,
  defineUserAnswears,
} = actions
