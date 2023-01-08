import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        current: -1,
        update: false
    },
    reducers: {
        update: (state, action) => {
            if(action.payload.index!=-1&&state.update==false){
                state.current=action.payload.index;
                state.update=true;
            }
            if(action.payload.index==-1){
                if(state.update==false)
                    state.current=-1;
                else 
                    state.update=false;
            }
        },
    },
});

export const { update } = itemSlice.actions;

export const itemReducer = itemSlice.reducer;
