import { createSlice } from '@reduxjs/toolkit';

//topics slice
export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    //action creator - this will add the topic object to the initial state topics object
    addTopic: (state, action) => {
      state.topics.push({
        [action.payload.id]: {
        id: action.payload.id,
        name: action.payload.name,
        icon: action.payload.icon,
        quizIds: []
        }
      })
    }
  }
})

export const { addTopic } = topicsSlice.actions;
export const selectTopic = (state) => state.topics.topics;
export default topicsSlice.reducer;
// console.log(topicsSlice);
//add this page to github
