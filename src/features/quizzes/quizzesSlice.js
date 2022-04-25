import { createSlice } from '@reduxjs/toolkit';

//quizzes slice
export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    //action creator - this will add the quizz object to the initial state quizzes object
    addQuiz: (state, action) => {
        state.quizzes[action.payload.id] = {
        id: action.payload.id,
        name: action.payload.name,
        topicId: action.payload.topicId,
        cardIds: []
        }
    }
  }
})

export const { addQuiz } = quizzesSlice.actions;
export const selectQuiz = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;