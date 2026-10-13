import React, { useState } from 'react'
import api from '../services/api';
import { toast } from "sonner"
import { useDispatch } from 'react-redux';
import { setLectureData } from '../redux/features/lectureSlice.js';

function useCreateLecture() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
   const createLecture = async(courseId, {lectureTitle}) => {
    setLoading(true);
    try {
        const res = await api.post(`/lectures/createlecture/${courseId}`, {lectureTitle});
        dispatch(setLectureData(res?.data?.data?.course?.lectures));
        toast.success("Lecture Created");
        setLoading(false)
    } catch (error) {
        setLoading(false);
        toast.error(error?.response?.data?.message)
        
    }finally{
        setLoading(false);
    }

   }
   return {createLecture, loading}
}

export default useCreateLecture
