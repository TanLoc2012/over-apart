import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartSlice';
import { itemReducer } from './reducers/itemSlice';
import { userReducer } from './reducers/userSlice';
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        item: itemReducer
    },
});
