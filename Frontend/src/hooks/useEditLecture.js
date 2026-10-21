import React, { useState } from 'react'
import api from '../services/api'
import { toast } from "sonner"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { updateLecture } from '../redux/features/lectureSlice.js';
function useEditLecture() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const editLecture = async(lectureId, courseId, data) => {
        setLoading(true);
        try {
            const res = await api.post(`lectures/editlecture/${lectureId}`, data);
            dispatch(updateLecture(res?.data?.data));
            navigate(`/createlecture/${courseId}`)
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
