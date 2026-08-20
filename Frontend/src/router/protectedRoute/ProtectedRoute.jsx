import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const { authUser } = useSelector(state => state.user);
    if(!authUser){
        return <Navigate to="/signup" replace/>
    }
    return (
        <Outlet/>
    )
}

export default ProtectedRoute
