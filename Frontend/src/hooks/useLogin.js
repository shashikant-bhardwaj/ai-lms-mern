import React, { useState } from 'react'
import { toast } from "react-toastify"
import api from "../services/api.js"
import { useNavigate } from 'react-router-dom';


function useLogin() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = async(userData) => {
        setLoading(true);
        try {
            const res = await api.post("/auth/login", userData);
            console.log(res);
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
