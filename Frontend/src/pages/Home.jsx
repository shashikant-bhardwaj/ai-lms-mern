
import React from 'react'
import { Navbar } from '../components/Navbar.jsx';
import home from "../assets/home1.jpg"
import { SiViaplay } from "react-icons/si";
import ai from "../assets/ai.png"
import ai1 from "../assets/SearchAi.png"
import Logos from '../components/Logos.jsx';
import ExploreCourses from '../components/ExploreCourses.jsx';
function Home() {
  return (
    <>
      <div className="relative lg:h-screen text-2xl">

        <Navbar />

        <img
          src={home}
          className="w-full h-[50vh] lg:h-screen  object-cover md:object-fill"
          alt=""
        />

        <span
          className="
            absolute
            lg:text-[60px]
            md:text-[40px]
            text-[20px]
            lg:top-[12%]
            md:top-[13%]
            top-[17%]
            w-full
            flex
            items-center
            justify-center
            text-white
            font-bold
          "
        >
          Grow Your Skills to Advance
        </span>

        <span
          className="
            absolute
            lg:text-[60px]
            md:text-[40px]
            text-[20px]
            lg:top-[20%]
            md:top-[19%]
            top-[22%]
            w-full
            flex
            items-center
            justify-center
            text-white
            font-bold
          "
        >
          Your Career Path
        </span>


        {/* Buttons */}

     <div className='relative lg:absolute lg:top-[33%] w-full 
flex items-center justify-center gap-3 flex-wrap py-[20px] lg:py-0'>

          <button
            className="
              px-[20px]
              py-[10px]
              border-2
              lg:border-white
              border-black
              lg:text-white
              text-black
              rounded-[10px]
              text-[18px]
              font-light
              flex
              items-center
              gap-2
              cursor-pointer
            "
          >
            View All Courses

            <SiViaplay
              className="
                w-[30px]
                h-[30px]
                lg:fill-white
                fill-black
              "
            />
          </button>


          <button
            className="
              px-[20px]
              py-[10px]
              lg:bg-white
              bg-black
              lg:text-black
              text-white
              rounded-[10px]
              text-[18px]
              font-light
              flex
              items-center
              gap-2
              cursor-pointer
            "
          >
            Search With Ai

            <img
              src={ai}
              className="w-[30px] h-[30px] rounded-full hidden lg:block"
              alt=""
            />

            <img
              src={ai1}
              className="w-[35px] h-[35px] rounded-full lg:hidden"
              alt=""
            />
          </button>

        </div>

      </div>

      <Logos />

      <ExploreCourses />
    </>
  );
}

export default Home