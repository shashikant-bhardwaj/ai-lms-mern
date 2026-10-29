import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    createdCourses: [],
    publishedCourses: [],
    selectedCourse: null
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
        },
        setRemovedCourse:(state, action) => {
            const removedCourse = action.payload;
            state.createdCourses = state.createdCourses.filter((courses) => courses?._id != removedCourse);
        },
        setPublishedCourses:(state, action) => {
            state.publishedCourses = action.payload;
        },
        setSelectedCourse:(state, action) => {
            state.selectedCourse = action.payload;
        }
        
    }
})

export const { setCreatedCourses, setAddCourse, setUpdatedCourses, setRemovedCourse, setPublishedCourses, setSelectedCourse } = courseSlice.actions;
export default courseSlice.reducer;