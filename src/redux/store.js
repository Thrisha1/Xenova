import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import adReducer from "./features/adSlice";
import userReducer from "./features/userSlice";
import referralReducer from "./features/referral/referralSlice";

export const store = configureStore({
  reducer: {
    referral: referralReducer,
    counter: counterReducer,
    ad: adReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;
