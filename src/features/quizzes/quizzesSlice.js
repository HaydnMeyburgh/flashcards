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
        state.quizzes[action.payload.id] = {
        id: action.payload.id,
        name: action.payload.name,
        topicId: action.payload.topicId,
        cardIds: []
        }
    }
  }
})
export const thunkActionCreator = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz({ id: payload.id, name: payload.name, topicId: payload.topicId, cardIds: payload.cardIds })); 
    dispatch(addQuizId({ topicId: payload.topicId, quizIds: payload.id})); 
  }
}

export const { addQuiz } = quizzesSlice.actions;
export const selectQuiz = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;