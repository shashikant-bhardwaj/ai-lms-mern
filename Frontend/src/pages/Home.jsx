import React from 'react'
import { Navbar } from '../components/Navbar.jsx';
import home from "../assets/home1.jpg"
import { SiViaplay } from "react-icons/si";
import ai from "../assets/ai.png"
import ai1 from "../assets/SearchAi.png"
import Logos from '../components/Logos.jsx';

function Home() {
      
      console.log("HOME MOUNTED");

    return (
        <>
        <div className='text-2xl'>
             <Navbar/>
            <img src={home} className='object-cover md:object-fill w-[100%] lg:h-[100%] h-[50vh]' alt="" />

            <span className='lg:text-[70px] absolute md:text-[40px] lg:top-[15%] md:top-[9%] top-[12%] w-[100%]
            flex items-center justify-center text-white font-bold text-[20px]'>Grow Your Skills to Advance</span>
            <span className='lg:text-[70px] absolute md:text-[40px] lg:top-[25%] md:top-[13%] top-[15%] w-[100%]
            flex items-center justify-center text-white font-bold text-[20px]'>Your Career Path</span>

            <div className='absolute lg:top-[40%] top-[55%] md:top-[55%] w-[100%] 
            flex items-center justify-center gap-3 flex-wrap'>
                <button className='px-[20px] py-[10px] border-2 lg:border-white border-black lg:text-white
                text-black rounded-[10px] text-[18px] font-light flex items-center gap-2 cursor-pointer'>View All Courses <SiViaplay className='w-[30px] h-[30px]
                lg:fill-white fill-black'/></button>
                <button className='px-[20px] py-[10px]  lg:bg-white bg-black lg:text-black
                text-white rounded-[10px] text-[18px] font-light flex items-center gap-2 cursor-pointer'>Search With Ai <img src={ai} className='
                w-[30px] h-[30px] rounded-full hidden lg:block' alt="" /> <img src={ai1} className='
                w-[35px] h-[35px] rounded-full lg:hidden' alt="" /></button>
            </div>
           
            
        </div>
         <Logos/>
        </>
    )
}

export default Home
