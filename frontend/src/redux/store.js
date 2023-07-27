// store.js
import { configureStore } from '@reduxjs/toolkit';
import {propertyReducer} from './reducers/propertyReducer';

const store = configureStore({
  reducer: {
    properties: propertyReducer, 
  },
});
export default store;
