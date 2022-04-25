import { createSlice } from '@reduxjs/toolkit';

//Cards slice
export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {}
  },
  reducers: {
    //action creator - this will add the cards object to the initial state cards object
    addCards: (state, action) => {
        state.cards[action.payload.id] = {
        id: action.payload.id,
        front: action.payload.front,
        back: action.payload.back
        }
    }
  }
})


export const { addCards } = cardsSlice.actions;
export const selectCard = (state) => state.cards.cards;
export default cardsSlice.reducer;