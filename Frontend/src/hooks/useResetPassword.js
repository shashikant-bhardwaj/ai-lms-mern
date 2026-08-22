import api from "../services/api.js"
import { toast } from "react-toastify"

import React from 'react'
import { useState } from "react"

function UseResetPassword() {
   const [loading3, setLoading3] = useState(false);

   const  resetPassword = async(email,  password) => {
    setLoading3(true);
    try {
        const res = await api.post("/auth/resetpassword", {email, password: password});
        setLoading3(false);
        toast.success(res?.data?.message);
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message);
    }finally{
        setLoading3(false);
    }
   }
   return { loading3, resetPassword }
}

export default UseResetPassword
