import { createSlice } from "@reduxjs/toolkit";
import referralData from "./referralData.json";

const initialState = {
  referral_details: [],
  referrals: [],
};

export const referral = createSlice({
  name: "referral",
  initialState,
  reducers: {
    reset: () => initialState,
    fetchReferralDetails: (state, action) => {
      state.referral_details = action.payload;
    },
  },
});

export const { fetchReferralDetails, reset } = referral.actions;

export const fetchReferralData = () => {
  return async (dispatch) => {
    try {
      // Simulate API call to fetch referral data from a JSON file
      // Replace the following line with your actual API call or data fetching logic
      // const response = await fetch("/path/to/referralData.json");
      // const data = await response.json();
      const data = referralData.referrals;
      dispatch(fetchReferralDetails(data));
      console.log("Referral data fetched successfully");
      console.log("Referral data:", data)
    } catch (error) {
      console.log("Error fetching referral data:", error);
    }
  };
};

export default referral.reducer;
