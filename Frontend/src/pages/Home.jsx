import React from 'react'
import { Navbar } from '../components/Navbar.jsx';
function Home() {
      
      console.log("HOME MOUNTED");

    return (
        <div className='text-2xl'>
             <Navbar/>
            
        </div>
    )
}

export default Home
