import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;
