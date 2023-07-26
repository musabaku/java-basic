import { createReducer } from "@reduxjs/toolkit";
// import { createReducer } from "@reduxjs/toolkit";


export const propertyReducer = createReducer(
  {},
  {
    propertyRequest: (state) => {
      state.loading = true;
    },
    propertySuccess: (state, action) => {
      (state.loading = false), (state.property = action.payload.property);
      state.propertyCount = action.payload.propertyCount;
      state.message = action.payload.message;
    },
    propertyFail: (state, action) => {
      (state.loading = false), (state.property = null);
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null; 
    },
  }
);
