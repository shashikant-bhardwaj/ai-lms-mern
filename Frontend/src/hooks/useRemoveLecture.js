import React, { useState } from 'react'
import api from '../services/api'
import { toast } from "sonner"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { removeLectureAction } from '../redux/features/lectureSlice.js';

function useRemoveLecture() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [removeLoading, setRemoveLoading] = useState(false);

    const removeLecture = async(lectureId, courseId) => {
        setRemoveLoading(true);
        try {
            await api.delete(`/lectures/removelecture/${lectureId}`);
            dispatch(removeLectureAction(lectureId))
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
