import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import { Toaster } from 'sonner';
import useGetCurrentUser from "./hooks/useGetCurrentUser.js"
import useGetPublishedCourses from './hooks/useGetCreatedCourses.js';
import useGetCreatedCourses from './hooks/useGetCreatedCourses.js';
import UseGetPublishedCourses from './hooks/useGetPublishedCourses.js';



function App() {
 useGetCurrentUser();
 useGetCreatedCourses();
 UseGetPublishedCourses();
  
  


  return (
    <>
   <Toaster/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default App
