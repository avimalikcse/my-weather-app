import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import weatherReducer from '../reducers/weatherApp/weatherReducer';
import thunk from "redux-thunk";

/**
 * Root Reducer: import and combine all reducers that needs to be exposed to store 
 */
export const store = configureStore({
    reducer: {
        weather: weatherReducer, // for Weather Forecast Feature
    },
}, applyMiddleware([thunk]));