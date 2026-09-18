import React, { useState } from 'react'
import api from '../services/api'


function useGetCourseById() {
    const [loading , setLoading] = useState(false);
    const getCourseById = async(courseId, setSelectedCourse) => {
        setLoading(true);
        try {
            const res = await api.get(`/courses/coursebyid/${courseId}`);
            setSelectedCourse(res?.data?.data);
            console.log("Complete API Response:", res.data);
console.log("Course Data:", res.data.data);
            // console.log("selectedcourse:", selectedCourse)
        } catch (error) {
            console.log("getCourseById error : ", error)
            setLoading(false);
        }finally{
            setLoading(false);
        }
    }
    return { getCourseById, loading }
}

export default useGetCourseById
