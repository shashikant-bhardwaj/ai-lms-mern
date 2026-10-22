import React, { useEffect } from 'react'
import api from "../services/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setPublishedCourses } from '../redux/features/courseSlice.js';

function UseGetPublishedCourses() {
    const dispatch = useDispatch();
       const {authUser} = useSelector(state => state.user)
       useEffect(() => {
         const getCreatedCourses = async() => {
    
        try {
            const res = await api.get("/courses/publishedcourse");
            dispatch(setPublishedCourses(res?.data?.data));
    
        } catch (error) {
            console.log(error)
        }
       }
       if(authUser){
           getCreatedCourses();
       }
    
       
       },[ authUser, dispatch ])
}

export default UseGetPublishedCourses
