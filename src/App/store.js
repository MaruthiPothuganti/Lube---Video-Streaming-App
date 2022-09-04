import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/LoginSlice'
import signupReducer from '../features/SignUpSlice'


export const store = configureStore({
    reducer: {
        login: loginReducer,
        signup: signupReducer
    },

})
