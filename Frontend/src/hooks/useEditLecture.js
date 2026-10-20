import React, { useState } from 'react'
import api from '../services/api'
import { toast } from "sonner"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setLectureData } from '../redux/features/lectureSlice.js';
function useEditLecture() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const editLecture = async(lectureId, data) => {
        setLoading(true);
        try {
            const res = await api.post(`lectures/editlecture/${lectureId}`, data);
            console.log(res?.data?.data)
            dispatch(setLectureData(res?.data?.data));
            navigate("/courses")
            toast.success("Edited");
            setLoading(false);
        } catch (error) {
            toast.error(error?.response?.message);
            setLoading(false);
        }finally{
            setLoading(false);
        }
    }
    return {editLecture, loading};

    
}

export default useEditLecture
