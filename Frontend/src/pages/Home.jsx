import React from 'react'
import { Navbar } from '../components/Navbar.jsx';
import UseGetCurrentUser from "../hooks/useGetCurrentUser.js"
function Home() {
      UseGetCurrentUser();
      console.log("HOME MOUNTED");

    return (
        <div className='text-2xl'>
             <Navbar/>
            
        </div>
    )
}

export default Home
