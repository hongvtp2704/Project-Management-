import cartReducer from '../features/Cart/CartSlice';
import loginReducer from '../features/Log-in/LoginSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
    cart: cartReducer,
    login: loginReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store;