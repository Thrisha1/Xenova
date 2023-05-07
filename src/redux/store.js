import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import adReducer from "./features/adSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ad: adReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;
