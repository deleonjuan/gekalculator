import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    historial: [],
}

export const calculatorSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        AddToHistory: (state, action) => {
            state.historial = [...state.historial, action.payload]
        },
    }
})

export const { 
    AddToHistory,
} = calculatorSlice.actions

export default calculatorSlice.reducer