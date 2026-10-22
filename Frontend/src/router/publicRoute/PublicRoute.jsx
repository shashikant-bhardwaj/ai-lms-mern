import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute() {
    const { authUser } = useSelector(state => state.user);

    if(authUser){
       return <Navigate to="/" replace />
    }
    return (
        <Outlet/>
    )
}

export default PublicRoute
