import React from 'react'
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setAuthUser } from '../redux/features/userSlice'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

function useEditProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const editProfile = async (data) => {
        setLoading(true);
        try {
            const res = await api.post("/users/update-profile", data);
            dispatch(setAuthUser(res?.data?.data));
            navigate("/");
            toast.success("Profile Updated Successfully");
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(error?.response?.data?.message);
        }finally{
            setLoading(false);
        }
 
         
    }
    return { loading, editProfile }
}

export default useEditProfile
