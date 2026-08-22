import { useState } from "react"
import api from "../services/api.js"
import { toast } from "react-toastify"

import React from 'react'

function UseSendOtp() {
    const [loading, setLoading] = useState(false);
    
    const sendOtp = async(email) => {
        setLoading(true);
        try {
            const res = await api.post("/auth/sendotp", {email});
            setLoading(false);
            toast.success(res?.data?.message);
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data.message)
            throw error;
        }finally{
            setLoading(false);
        }

    }

    return { loading , sendOtp }

    
}

export default UseSendOtp
