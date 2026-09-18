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
        }    ,
        setUpdatedCourses: (state, action) => {
            const updatedCourse = action.payload;

            const index = state.createdCourses.findIndex(
                (course) => course?._id === updatedCourse?._id
            )

            if(index != -1){
                state.createdCourses[index] = updatedCourse;
            }
        }
        
    }
})

export const { setCreatedCourses, setAddCourse, setUpdatedCourses } = courseSlice.actions;
export default courseSlice.reducer;