const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: []
    },
    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true
        },
        hideMiniCart(state) {
            state.showMiniCart = false
        },
        addToCart(state, action) {
            const newItem = action.payload;
            const index = state.cartItems.findIndex((x) => x._id === newItem._id)
            if (index >= 0) {
                state.cartItems[index].quantity += newItem.quantity
            } else {
                state.cartItems.push(newItem)
            }
        },
        plusQuantity(state, action) {
            const { _id, quantity } = action.payload;
            const index = state.cartItems.findIndex((x) => x._id === _id);
            if (index >= 0) {
                state.cartItems[index].quantity += quantity
            }
        },
        minusQuantity(state, action) {
            const { _id, quantity } = action.payload;
            const index = state.cartItems.findIndex((x) => x._id === _id);
            if (index >= 0) {
                state.cartItems[index].quantity -= quantity
                if (state.cartItems[index].quantity <= 0) {
                    state.cartItems = state.cartItems.filter((x) => x._id !== _id)
                }
            }
        },
        removeFormCart(state, action) {
            const idNeedRemove = action.payload._id;
            state.cartItems = state.cartItems.filter((x) => x._id !== idNeedRemove)
        }
    }
})

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, plusQuantity, minusQuantity, removeFormCart } = actions;
export default reducer;