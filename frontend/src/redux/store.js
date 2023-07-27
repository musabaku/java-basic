// store.js
import { configureStore } from '@reduxjs/toolkit';
import {propertyReducer,propertyDetailsReducer} from './reducers/propertyReducer';

const store = configureStore({
  reducer: {
    properties: propertyReducer, 
    propertyDetails: propertyDetailsReducer, 

  },
});
export default store;
