import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {},
  quizzes: {},
  cards: {},
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon, quizIds } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: [quizIds],
      };
    },
  },
});

export const selectAllTopics = (state) => state.topics.topics;

//export action creator

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;