import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function ViewCourses() {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen bg-gray-50 p-6'>
            <div className='max-w-6xl mx-auto bg-white shadow-md 
            rounded-xl p-6 space-y-6 relative'>
                {/* top */}
                <div className='flex flex-col md:flex-row gap-6'>
                    {/* thumbnail */}
                    <div className='w-full md:w-1/2'>
                    <FaArrowLeftLong
                    onClick={() => navigate("/")}
                    className='text-[black] w-[22px] 
                    h-[22px] cursor-pointer'/>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewCourses
