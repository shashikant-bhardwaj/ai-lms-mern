import React, { useState } from 'react'
import api from '../services/api.js';
import { toast } from "sonner"
import { useDispatch } from 'react-redux';
import { setLectureData } from '../redux/features/lectureSlice.js';

function useGetCourseLecture() {
    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();
    const getCourseLecture = async(courseId) => {
        setLoad(true);
        try {
            const res = await api.get(`/lectures/getcourselecture/${courseId}`);
            dispatch(setLectureData(res?.data?.data));
            setLoad(false);
            
        } catch (error) {
            setLoad(false);
            toast.error(error?.response?.data?.message);
            
        }finally{
            setLoad(false);
        }
    }

    return {getCourseLecture, load};

}

export default useGetCourseLecture
