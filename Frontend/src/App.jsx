import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import { Toaster } from 'sonner';
import useGetCurrentUser from "./hooks/useGetCurrentUser.js"




function App() {
 useGetCurrentUser();
  
  


  return (
    <>
   <ToastContainer />
   <Toaster/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default App
