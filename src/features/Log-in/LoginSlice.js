const { createSlice } = require('@reduxjs/toolkit')

const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        currentUserName: ''
    },
    reducers: {
        updateUserName(state, action) {
            const newName = action.payload;
            state.currentUserName = newName.name.charAt(0).toUpperCase();
        }
    }
})

const { actions, reducer } = LoginSlice
export const { updateUserName } = actions
export default reducer