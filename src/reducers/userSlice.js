import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: '',
    reducers: {
        userLogIn: (state, action) => {},
    },
});

export const { userLogIn } = userSlice.actions;

export const userReducer = userSlice.reducer;
