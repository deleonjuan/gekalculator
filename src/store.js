import { configureStore } from "@reduxjs/toolkit";
// reducers
import counterReducer from './store/counterSlice'
import authReducer from './store/auth'
import calculatorReducer from './store/calculator'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        calculator: calculatorReducer,
    }
})