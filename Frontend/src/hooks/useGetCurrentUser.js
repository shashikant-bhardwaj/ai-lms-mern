import api from "../services/api.js"
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { setAuthUser } from "../redux/features/userSlice.js";
import { useState } from "react";

function useGetCurrentUser() {
    const [currentUserLoading, setCurrentUserLoading] = useState(false);
     const dispatch = useDispatch();
   

     useEffect( () => {
        const currentUser = async() => {
            setCurrentUserLoading(true);
            try {
                const res = await api.get("/users/current-user");
                console.log(res)
                dispatch(setAuthUser(res?.data?.data))
            } catch (error) {
                setCurrentUserLoading(false);
                console.log(error.response)
                dispatch(setAuthUser(null))
            }finally{
                setCurrentUserLoading(false);
            }
        }
        currentUser();
     }, [])

     return { currentUserLoading }
}

export default useGetCurrentUser
