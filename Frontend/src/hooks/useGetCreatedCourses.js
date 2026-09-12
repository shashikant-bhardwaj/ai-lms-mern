import api from "../services/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "sonner";

import React, { useEffect } from 'react'
import { setCreatedCourses } from "../redux/features/courseSlice";


function useGetCreatedCourses() {
   const dispatch = useDispatch();
   const {authUser} = useSelector(state => state.user)
   useEffect(() => {
     const getCreatedCourses = async() => {

    try {
        const res = await api.get("/courses/creatorcourses");
        console.log(res)
        dispatch(setCreatedCourses(res?.data?.data));

    } catch (error) {
        console.log(error)
    }
   }
   if(authUser){
       getCreatedCourses();
   }

   
   },[ authUser, dispatch ])
   
  
}

export default useGetCreatedCourses
