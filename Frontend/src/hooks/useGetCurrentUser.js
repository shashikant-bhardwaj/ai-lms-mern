import api from "../services/api.js"
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { setAuthUser } from "../redux/features/userSlice.js";

function UseGetCurrentUser() {
     const dispatch = useDispatch();

     useEffect( () => {
        const currentUser = async() => {
            try {
                const res = await api.get("/users/current-user");
                console.log(res)
                dispatch(setAuthUser(res?.data))
            } catch (error) {
                console.log(error.response)
            }
        }
        currentUser();
     }, [])
}

export default UseGetCurrentUser
