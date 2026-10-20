import React, { useState } from 'react'
import api from '../services/api'
import { toast } from "sonner"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setLectureData } from '../redux/features/lectureSlice.js';

function useRemoveLecture() {
    const navigate = useNavigate();
    const [removeLoading, setRemoveLoading] = useState(false);

    const removeLecture = async(lectureId, courseId) => {
        setRemoveLoading(true);
        try {
            const res = await api.post(`/lectures/removelecture/${lectureId}`);
            navigate(`/createlecture/${courseId}`);
            toast.success("Removed");
            setRemoveLoading(false);
        } catch (error) {
            toast.error(error?.response?.data?.message);
            setRemoveLoading(false);
        }finally{
            setRemoveLoading(false);
        }
    }
    return {removeLecture, removeLoading};
    
}

export default useRemoveLecture
