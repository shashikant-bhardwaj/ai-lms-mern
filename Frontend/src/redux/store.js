import { configureStore } from "@reduxjs/toolkit"
import  userReducer from "./features/userSlice.js"
import courseReducer from "./features/courseSlice.js"

const store = configureStore({
    reducer: {
        user: userReducer,
        courses: courseReducer
    }
})

export default store;