import { createReducer } from "@reduxjs/toolkit";

export const propertyReducer = createReducer(
  {properties:[]},
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

export const propertyDetailsReducer = createReducer(
  {property:[]},
  {
    propertyDetailsRequest: (state) => {
      state.loading = true;
    },
    propertyDetailsSuccess: (state, action) => {
      state.loading = false;
      state.property = action.payload;
      // state.propertyCount = action.payload.propertyCount;
    },
    propertyDetailsFail: (state, action) => {
      state.loading = false;
      state.property = null;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null; 
    },
  }
);
