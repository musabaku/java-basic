// store.js
import { configureStore } from '@reduxjs/toolkit';
// import propertiesReducer from './reducers/properties';

const store = configureStore({
  reducer: {
    // properties: propertiesReducer, 
  },
});
const server = "http://localhost:4000/api/v1"
export default store;
