import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  ads:[
    {
        id: 1,
        title: "Ad 1",
        description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
        image: "https://img.freepik.com/free-vector/realistic-eid-mubarak-greeting-card_1017-31239.jpg?w=2000",
        amt: 100,
        link:"https://www.google.co.in/"
    },
    {
        id: 2,
        title: "Ad 2",
        description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
        image: "https:.freepik.com/free-vector/realistic-eid-mubarak-greeting-card_1017-31239.jpg?w=2000",
        amt: 200,
        link:"https://www.google.co.in/"
    },
    {
        id: 3,
        title: "Ad 3",
        description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
        image: "https://img.freepik.com/free-vector/realistic-eid-mubarak-greeting-card_1017-31239.jpg?w=2000",
        amt: 300,
        link:"https://www.google.co.in/"
    }
  ],
};

export const Ad = createSlice({
  name: "ad",
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
} = Ad.actions;

export default Ad.reducer;
