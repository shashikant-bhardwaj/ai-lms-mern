import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer/>
    {/* <Navbar/> */}
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default App
