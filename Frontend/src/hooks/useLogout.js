import api from "../services/api.js"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/features/userSlice.js";
import { setCreatedCourses } from "../redux/features/courseSlice.js";

function useLogout() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = async() => {
        setLoading(true);
        try {
            const res = await api.post("/auth/logout");
            console.log(res?.data?.data);
            dispatch(setAuthUser(null))
            dispatch(setCreatedCourses(null))
            toast.success("logout successgully")
            setLoading(false);
            

        } catch (error) {
            console.log(error.response);
        }finally{
            setLoading(false);
        }
    }
    return { loading, logout }
   
}

export default useLogout
