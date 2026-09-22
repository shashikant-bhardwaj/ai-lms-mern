import React, { useState } from 'react'
import api from '../services/api'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setRemovedCourse } from '../redux/features/courseSlice';

function useRemoveCourse() {
    const [removeLoading, setRemoveLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const removeCourse = async(courseId) => {
        setRemoveLoading(true);
        try {
            const res = await api.post(`/courses/removecourse/${courseId}`);
            console.log("DELETE RESPONSE:", res.data);
            dispatch(setRemovedCourse(courseId));
            navigate("/courses");
            toast.success("removed");
            setRemoveLoading(false);
        } catch (error) {
            setRemoveLoading(false);
            toast.error(error?.response?.data?.message)
            
        }finally{
            setRemoveLoading(false);
        }
    }
    return { removeLoading, removeCourse }
   
}

export default useRemoveCourse
