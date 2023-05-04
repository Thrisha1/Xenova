import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "THRISHA KANNAN",
  email: "thrishakannan25@gmail.com",
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} = counter.actions;

export default counter.reducer;
