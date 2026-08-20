import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import useGetCurrentUser from "./hooks/useGetCurrentUser.js"




function App() {
 useGetCurrentUser();
  
  


  return (
    <>
   <ToastContainer />
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default App
