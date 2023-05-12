import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user_details: {
    name: "John Doe",
    email: "john@gmail.com",
    dob: "01/01/2000",
    contacts: "100",
    mobile: "+91",
    pincode: "123456",
    gender: "",
    shared_ads_amount: "",
    referrals_amount: "",
    total_amount: "",
    redeemed_amount: "",
    pending_amount: "",
    shared_ads: [
      {
        adId: 1,
        title: "Ad 1",
        desc: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
        imageSrc: "https://img.freepik.com/free-vector/realistic-eid-mubarak-greeting-card_1017-31239.jpg?w=2000",
        Amt: 100,
        link: "https://www.google.co.in/",
        shared: false,
        screenShot_uploaded: false,
        screenShot_data: "",
        accept_ad: false,
      },
    ],
    referrals: [],
  },
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    fetchContacts: (state) => {
      state.user_details.dob = "25/03/2003";
      state.user_details.contacts = 2500;

    },
    fetchDob: (state) => {
      state.user_details.dob = "25/03/2003";

    },
    decrement: (state, action) => {
      state.user_details.mobile = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.user_details.pincode = action.payload;
    },
    setGender: (state, action) => {
      console.log(action.payload)
      state.user_details.gender = action.payload;
    },
    sharedAds: (state, action) => {
      const data = action.payload;
      const sharedAdExists = state.user_details.shared_ads.some((item) => item.adId === action.payload.adId);
      if (sharedAdExists) {
        alert("Already Shared");
      } else {
        state.user_details.shared_ads = [...state.user_details.shared_ads, { ...data, shared: false, screenShot_uploaded: false, screenShot_data: "" }];
        console.log(state.user_details.shared_ads);
        alert("Shared Successfully");
      }
    },
  },
});

export const {
  fetchContacts,
  fetchDob,
  setGender,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
  sharedAds,
} = user.actions;

export default user.reducer;
