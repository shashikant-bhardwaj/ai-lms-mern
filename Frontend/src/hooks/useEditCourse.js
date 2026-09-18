import React, { useState } from 'react'
import api from '../services/api'
import { toast } from "sonner"
import { useDispatch } from 'react-redux'
import { setUpdatedCourses } from '../redux/features/courseSlice.js';
import { useNavigate } from 'react-router-dom';
function useEditCourse() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ loading2, setLoading2 ] = useState(false);
    const editCourse = async(courseId, formData) => {
        setLoading2(true);
        try {
            const res = await api.post(`/courses/editcourse/${courseId}`, formData)
            dispatch(setUpdatedCourses(res?.data?.data));
            navigate("/courses");
            toast.success(res?.data?.message)

        } catch (error) {
            setLoading2(false);
            toast.error(error?.response?.data?.message)
            
        }finally{
            setLoading2(false);
            
        }
    }
    return { editCourse, loading2 }
  
}

export default useEditCourse
