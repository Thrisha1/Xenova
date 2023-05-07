import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
    user_details: {
        name: "John Doe",
        email: "john@gmail.com",
        dob: "01/01/2000",
        contacts:"100",
        mobile: "+91",
        pincode: "123456",
        gender: "",
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
      decrement: (state,action) => {
        state.user_details.mobile = action.payload;
      },
      incrementByAmount: (state, action) => {
        state.user_details.pincode = action.payload;
      },
      setGender: (state, action) => {
        console.log(action.payload)
        state.user_details.gender = action.payload;
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
  } = user.actions;
  
  export default user.reducer;
  