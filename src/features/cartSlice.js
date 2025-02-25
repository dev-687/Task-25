import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cartItems.find(item => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const existingProduct = state.cartItems.find(item => item.id === action.payload.id);
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1;
                } else {
                    state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
                }
            }

        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
