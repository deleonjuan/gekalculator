import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
}

export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setUserToken: (state) => {
            state.token = 'USER_TOKEN'
        },
        logOut: (state) => {
            state.token = null
        },
    }
})

export const { 
    setUserToken, 
    logOut, 
} = authSlice.actions

export default authSlice.reducer