import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

function EducatorRoute() {

    const { authUser } = useSelector(state => state.user)
  
    if(!authUser?.role == "Educator"){
        return <Navigate to="/signup" replace/>
    }
    return (
        <Outlet/>
    )
}

export default EducatorRoute
