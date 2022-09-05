import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/LoginSlice'
import signupReducer from '../features/SignUpSlice'
import exploreReducer from '../features/ExploreSlice'


export const store = configureStore({
    reducer: {
        login: loginReducer,
        signup: signupReducer,
        explore: exploreReducer,
    },

})
