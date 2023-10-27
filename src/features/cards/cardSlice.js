import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {}
};

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addCards: (state, action) => {
            const cards = action.payload;
            cards.forEach(card => {
                state.cards[card.id] = {
                    id: card.id,
                    name: card.name,
                    front: card.front,
                    back: card.back
                }
            });
        }
    }
});

export const selectAllCards = state => state.cards.cards;

export const selectCardById = (state, id) => state.cards.cards[id];

export const { addCards } = cardsSlice.actions;

export default cardsSlice.reducer;