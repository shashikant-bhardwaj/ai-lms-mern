import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { toast } from "react-toastify"
import api from '../services/api.js'
import { setAddCourse } from '../redux/features/courseSlice.js'
import { toast } from "sonner"


function useCreateCourse() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const createCourse = async(data) => {
        setLoading(true);
        try {
            const res = await api.post("/courses/create", data);
            dispatch(setAddCourse(res?.data?.data));
            navigate("/courses");
            toast.success("Created")
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error(error?.response?.data?.message);
        }finally{
            setLoading(false);
        }
    }
    return { loading, createCourse }
    
}

export default useCreateCourse
