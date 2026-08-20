import React, { useState } from 'react'
import { toast } from "react-toastify"
import api from "../services/api.js"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/features/userSlice.js';


function useLogin() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async(userData) => {
        setLoading(true);
        try {
            const res = await api.post("/auth/login", userData);
            console.log(res);
            dispatch(setAuthUser(res?.data?.data))
            navigate("/")
            toast.success("login successfully")
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message)
        }finally{
            setLoading(false)
        }
    }
    return { login, loading }
  
}

export default useLogin
