import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";




function App() {


  return (
    <>
   <ToastContainer />
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default App
