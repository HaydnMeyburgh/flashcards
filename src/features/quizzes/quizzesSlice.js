import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';

//quizzes slice
export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    //action creator - this will add the quizz object to the initial state quizzes object
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = action.payload;
    }
  }
})
export const thunkActionCreator = (payload) => {
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(payload)); 
    dispatch(addQuizId({ topicId: payload.topicId, quizIds: payload.id})); 
  }
}

export const { addQuiz } = quizzesSlice.actions;
export const selectQuiz = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
