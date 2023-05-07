import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import adReducer from "./features/adSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ad: adReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;
