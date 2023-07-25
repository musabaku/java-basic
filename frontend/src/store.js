// store.js
import { configureStore } from '@reduxjs/toolkit';
// import propertiesReducer from './reducers/properties';

const store = configureStore({
  reducer: {
    // properties: propertiesReducer, 
  },
});

export default store;
