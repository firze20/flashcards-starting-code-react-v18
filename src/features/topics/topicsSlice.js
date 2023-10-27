import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {},
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: []
      };
    },
    addQuizId: (state, action) => {
      const { id, topicId } = action.payload;
      state.topics[topicId] = {
        ...state.topics[topicId], //remain the rest of the state 
        quizIds: [...state.topics[topicId].quizIds, id]
      };
    },
  },
});

export const selectAllTopics = (state) => state.topics.topics;

//export action creator

export const { addTopic, addQuizId } = topicsSlice.actions;

export default topicsSlice.reducer;
