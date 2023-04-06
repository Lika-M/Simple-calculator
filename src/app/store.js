import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import calculatorReducer from '../features/calculator/calculatorSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculator: calculatorReducer
  },
});
