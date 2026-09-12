import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import { Toaster } from 'sonner';
import useGetCurrentUser from "./hooks/useGetCurrentUser.js"
import useGetCreatedCourses from './hooks/useGetCreatedCourses.js';
import { setCreatedCourses } from './redux/features/courseSlice.js';



function App() {
 useGetCurrentUser();
 useGetCreatedCourses()
  
  


  return (
    <>
   <Toaster/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default App
