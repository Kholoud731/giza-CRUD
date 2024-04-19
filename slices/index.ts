import { combineReducers } from '@reduxjs/toolkit';
import flightReducer from './flightSlice';
import authReducer from './authSlice'

const rootReducer = combineReducers({
  flight: flightReducer,
  auth: authReducer
});

export default rootReducer;
