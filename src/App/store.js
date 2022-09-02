import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/LoginSlice'


export const store = configureStore({
    reducer: {
        login: loginReducer,
    },

})
