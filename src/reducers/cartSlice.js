import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.product.id === action.payload.product.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1, isChecked: false });
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        decrementQuantity: (state, action) => {
            const itemInCart = state.cart.find((item) => item.product.id === action.payload.product.id);
            let newCart = [...action.payload];
            if (itemInCart.quantity === 1) {
                newCart = newCart.filter((item) => item.product.id !== itemInCart.product.id);
            } else {
                itemInCart.quantity--;
            }
            localStorage.setItem('cart', JSON.stringify(newCart));
        },
        selectItem: (state, action) => {
            const itemInCart = state.cart.find((item) => item.product.id === action.payload.product.id);
            if (itemInCart) {
                itemInCart.isChecked = !itemInCart.isChecked;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },
        selectAllOfShop: (state, action) => {
            const itemInCart = state.cart.find((item) => item.product.id === action.payload.product.id);
            if (itemInCart) {
                itemInCart.isChecked = !itemInCart.isChecked;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },
    },
});

export const { addToCart, decrementQuantity, selectItem, selectAllOfShop } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
