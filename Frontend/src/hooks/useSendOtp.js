import { useState } from "react"
import api from "../services/api.js"
import { toast } from "react-toastify"

import React from 'react'

function UseSendOtp() {
    const [loading, setLoading] = useState("");
    
    const sendOtp = async(email) => {
        setLoading(true);
        try {
            const res = await api.post("/auth/sendotp", {email});
            console.log(res?.data.data);
            setLoading(false);
            toast.success(res?.data?.data?.message);
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data.message)
        }

    }

    return { loading , sendOtp }

    
}

export default UseSendOtp
