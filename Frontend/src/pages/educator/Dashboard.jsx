import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TiArrowLeftThick } from "react-icons/ti";

function Dashboard() {
    const { authUser } = useSelector(state => state.user)
    const navigate = useNavigate();
    return (
        <div className='flex min-h-screen bg-gray-100'>
 <TiArrowLeftThick
    className="
        w-[22px] h-[22px] absolute
        top-[8%] left-[5%]

        min-[768px]:top-[3%] min-[768px]:left-[3%]

        min-[960px]:top-[2%] min-[960px]:left-[2%]

        min-[1032px]:top-[2%] min-[1032px]:left-[2%]

        min-[1280px]:top-[8%] min-[1280px]:left-[8%]

        cursor-pointer
    "
    onClick={() => navigate("/")}
 />
            <div className='w-full px6 py-10 bg-gray-50 space-y-10'>
                 {/* main section  */}
              <div className='max-w-5xl mx-auto bg-white rounded-xl 
              shadow-md p6 flex flex-col md:flex-row items-center gap-6'>
                
                <img src={authUser?.photoUrl || authUser?.fullName.slice(0,1).toUpperCase()} 
                 className='w-25 h-25 rounded-full object-cover border-4 
                 border-black shadow-md' alt="" />

                 <div className='text-center md:text-left space-y-1'>
                    <h1 className='text-2xl font-bold text-gray-800'>Welcome, {authUser?.fullName || "Educator"} 👋</h1>
                    <h1 className='text-xl font-semibold text-gray-800'>Total Earning : 0</h1>
                    <p className='text-gray-600 text-sm'>{authUser?.description || "Start Creating Courses For Your Students"}</p>
                    <h1 onClick={() => navigate("/courses")} className='px-[10px] text-center 
                    py-[10px] border-2 bg-black border-black text-white rounded-[10px] 
                    text-[15px] font-light flex items-center justify-center 
                    mt-2 mb-2 cursor-pointer'>Create Courses</h1>
                 </div>

              </div>
            </div>
           
        </div>
    )
}

export default Dashboard
