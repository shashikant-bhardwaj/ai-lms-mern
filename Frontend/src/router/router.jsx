import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home.jsx";
import SignUp from "../pages/SignUp.jsx";
import Login from "../pages/Login.jsx";

    
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "signup",
                element: <SignUp/>
            },
            {
                path: "login",
                element: <Login/>
            },
            
        ]
    }

    
])
 

export default router
