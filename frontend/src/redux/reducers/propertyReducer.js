import { createReducer } from "@reduxjs/toolkit";

export const propertyReducer = createReducer(
  {},
  {
    propertyRequest: (state) => {
      state.loading = true;
    },
    propertySuccess: (state, action) => {
      state.loading = false;
      state.properties = action.payload.property;
      // state.propertyCount = action.payload.propertyCount;
    },
    propertyFail: (state, action) => {
      state.loading = false;
      state.properties = null;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null; 
    },
  }
);
