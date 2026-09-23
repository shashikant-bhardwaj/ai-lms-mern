import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Navbar } from '../components/Navbar.jsx'
import { useNavigate } from 'react-router-dom';

function AllCourses() {
    const navigate = useNavigate();
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <Navbar/>

            {/* sidebar */}

            <aside className='w-[260px] h-screen overflow-y-auto
            bg-black fixed top-0 left-0 p-6 py-[130px] border-r 
            border-gray-200 shadow-md transition-transform duration-300 z-5'>
                <h2 className='text-xl font-bold flex items-center
                justify-center gap-2 text-gray-50 mb-6'>
                     <FaArrowLeftLong 
                      onClick={() => navigate("/")}
                      className='text-white'/> Filter By Category</h2>

                      <form action="" className='space-y-4 text-sm bg-gray-600
                      border-white text-[white] border p-[20px] rounded-2xl'>
                     
                     <button className='px-[10px] py-[10px] bg-black
                     text-white rounded-[10px] text-[15px] font-light
                     flex items-center justify-center gap-2 cursor-pointer'>
                        Search With Ai
                     </button>
                      </form>
            </aside>
        </div>
    )
}

export default AllCourses
