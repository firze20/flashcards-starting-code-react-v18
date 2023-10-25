import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {}
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;

      state.quizzes[id] = {
        id,
        name,
        topicId,
        cardIds
      }
    }
  },
});

export const selectAllQuizzes = (state) => state.quizzes.quizzes;

//export actions creators

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;