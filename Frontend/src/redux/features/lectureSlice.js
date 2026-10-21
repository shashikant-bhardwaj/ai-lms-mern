import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lectureData: []
}

const lectureSlice = createSlice({
    name: "lecture",
    initialState,
    reducers: {
        setLectureData: (state, action) => {
            state.lectureData = action.payload;
        },
        updateLecture: (state, action) => {
            const updateLecture = action.payload;

            state.lectureData = state.lectureData.map((lecture) => (
                lecture._id === updateLecture?._id ? updateLecture : lecture
            ))
        },
        removeLectureAction: (state, action) => {
            const removedLectureId = action.payload;

            state.lectureData = state.lectureData.filter((lecture) => (
                lecture?._id !== removedLectureId
            ))
        }
        
    }
})

export const { setLectureData, updateLecture, removeLectureAction } = lectureSlice.actions;
export default lectureSlice.reducer;