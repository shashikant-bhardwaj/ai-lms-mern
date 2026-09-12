import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    createdCourses: []
}

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setCreatedCourses: (state, action) => {
            state.createdCourses = action.payload;
        },
        setAddCourse: (state, action) => {
            state.createdCourses.push(action.payload)
        }    
        
    }
})

export const { setCreatedCourses, setAddCourse } = courseSlice.actions;
export default courseSlice.reducer;