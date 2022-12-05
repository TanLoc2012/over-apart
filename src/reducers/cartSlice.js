import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            const shop = state.cart.find((item) => item.shopName === action.payload.product.shop);
            if (shop) {
                const itemInShop = shop.products.find((item) => item.product.id === action.payload.product.id);
                if (itemInShop) {
                    itemInShop.quantity++;
                } else {
                    shop.products.push({ ...action.payload, quantity: 1, isChecked: false });
                }
            } else {
                state.cart.push({
                    shopName: action.payload.product.shop,
                    products: [{ ...action.payload, quantity: 1, isChecked: false }],
                    isChecked: false,
                });
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeProductInCart: (state, action) => {
            const shop = state.cart.find((item) => item.shopName === action.payload.product.shop);
            if (shop) {
                const itemInShop = shop.products.find((item) => item.product.id === action.payload.product.id);
                if (itemInShop.quantity === 1) {
                    shop.products = shop.products.filter((item) => item.product.id !== itemInShop.product.id);
                    localStorage.setItem('cart', JSON.stringify(state.cart));
                }
            }
        },
        decrementQuantity: (state, action) => {
            const shop = state.cart.find((item) => item.shopName === action.payload.product.shop);
            if (shop) {
                const itemInShop = shop.products.find((item) => item.product.id === action.payload.product.id);
                if (itemInShop.quantity === 1) {
                    shop.products = shop.products.filter((item) => item.product.id !== itemInShop.product.id);
                } else {
                    itemInShop.quantity--;
                }
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },
        incrementQuantity: (state, action) => {
            const shop = state.cart.find((item) => item.shopName === action.payload.product.shop);
            if (shop) {
                const itemInShop = shop.products.find((item) => item.product.id === action.payload.product.id);
                if (itemInShop) {
                    itemInShop.quantity++;
                    localStorage.setItem('cart', JSON.stringify(state.cart));
                }
            }
        },
        selectItem: (state, action) => {
            const shop = state.cart.find((item) => item.shopName === action.payload.product.shop);
            if (shop) {
                const itemInShop = shop.products.find((item) => item.product.id === action.payload.product.id);
                if (itemInShop) {
                    itemInShop.isChecked = !itemInShop.isChecked;
                    if (itemInShop.isChecked === false && shop.isChecked === true) {
                        shop.isChecked = false;
                    }
                    if (itemInShop.isChecked === true) {
                        shop.isChecked = shop.products.find((item) => item.isChecked === false) ? false : true;
                    }
                    localStorage.setItem('cart', JSON.stringify(state.cart));
                }
            }
        },
        selectAllOfShop: (state, action) => {
            const shop = state.cart.find((item) => item.shopName === action.payload.shopName);
            if (shop) {
                shop.isChecked = !shop.isChecked;
                shop.products.map((item) => (item.isChecked = shop.isChecked));
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },
        selectAll: (state, action) => {
            if (state.cart) {
                state.cart.map((shop) => {
                    shop.isChecked = action.payload;
                    shop.products.map((item) => (item.isChecked = action.payload));
                });
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },
    },
});

export const {
    addToCart,
    decrementQuantity,
    selectItem,
    selectAllOfShop,
    selectAll,
    incrementQuantity,
    removeProductInCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

// const shop = {
//     'shopName': '1111',
//     'products': [
//         {

//         }
//     ]
// }
