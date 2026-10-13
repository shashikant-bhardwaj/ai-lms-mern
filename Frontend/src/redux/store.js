import { configureStore } from "@reduxjs/toolkit"
import  userReducer from "./features/userSlice.js"
import courseReducer from "./features/courseSlice.js"
import lectureReducer from "./features/lectureSlice.js"

const store = configureStore({
    reducer: {
        user: userReducer,
        courses: courseReducer,
        lecture: lectureReducer
    }
})

export default store;