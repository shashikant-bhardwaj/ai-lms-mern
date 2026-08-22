import api from "../services/api.js"
import { toast } from "react-toastify"

import React from 'react'
import { useState } from "react"

function UseVerifyOtp() {
    const  [loading2 , setLoading2] = useState(false);

    const verifyOtp = async(email, otp) => {
        setLoading2(true);
        try {
            const res = await api.post("auth/verifyotp", {email, otp})
            setLoading2(false);
            toast.success(res?.data?.data?.message);
        } catch (error) {
            console.log(error);
            setLoading2(false);
            toast.error(error.response?.data?.message);
        }finally{
            setLoading2(false)
        }
    }
    return { loading2, verifyOtp }
}

export default UseVerifyOtp
