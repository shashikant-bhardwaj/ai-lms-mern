import React from "react";
import { SiViaplay } from "react-icons/si";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FaUikit } from "react-icons/fa";
import { MdAppShortcut } from "react-icons/md";
import { FaHackerrank } from "react-icons/fa6";
import { AiFillOpenAI } from "react-icons/ai";
import { SiGoogledataproc } from "react-icons/si";
import { BsClipboardDataFill } from "react-icons/bs";
import { SiGooglegemini } from "react-icons/si";

function ExploreCourses() {
  return (
    <div
      className="w-full min-h-[50vh] lg:h-[50vh] flex 
        flex-col lg:flex-row  items-center justify-center gap-4 pt-[90px] px-[30px]"
    >
      {/* {left/top div} */}
      <div
        className="w-[100%] lg:w-[350px] lg:h-[100%] h-[400px] 
            flex flex-col items-start  justify-center gap-1 md:px-[40px]
             px-[20px]"
      >
        <span className="text-[35px] font-semibold ">Explore Courses</span>
        <span className="text-[35px] font-semibold">Our Courses</span>
        <p className="text-[17px] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, cum
          minus modi, qui omnis a ratione laudantium quis blanditiis esse
          inventore quisquam asperiores sunt quo assumenda impedit quas
          temporibus maiores optio repellendus. Harum deserunt maxime neque
          distinctio aspernatur quam corrupti!
        </p>
        <button className="px-[20px] py-[10px] border-2 bg-[black]
        border-white text-white rounded-[10px] text-[18px]
        font-light flex gap-2 mt-[40px] cursor-pointer">Explore Courses <SiViaplay className='w-[30px] h-[30px]
        fill-white'/></button>
      </div>
      {/* {right/bottom div} */}
     <div className="
    mt-[30px]
    w-full
    max-w-[720px]
    lg:h-[300px]
    min-h-[300px]
    flex
    items-center
    justify-center
    lg:gap-[60px]
    gap-[50px]
    flex-wrap
    mb-[50px]
    lg:mb-0
">
        <div className="w-[100px] h-[130px] font-light text-[13px] 
        flex flex-col gap-3 text-center">
            <div className="w-[100px] h-[90px] bg-[#fbd9fb]
            rounded-lg flex items-center justify-center">
             <TbDeviceDesktopAnalytics className="w-[60px] h-[60px] text-[#6d6c6c]"/>
            </div>
            Web Dev
        </div>
        <div className="w-[100px] h-[130px] font-light text-[13px] 
        flex flex-col gap-3 text-center">
            <div className="w-[100px] h-[90px] bg-[#c2eecc]
            rounded-lg flex items-center justify-center">
             <FaUikit className="w-[60px] h-[60px] text-[#6d6c6c]"/>
            </div>
            UI/UX Designing
        </div>
        <div className="w-[100px] h-[130px] font-light text-[13px] 
        flex flex-col gap-3 text-center">
            <div className="w-[100px] h-[90px] bg-[#fab4c0]
            rounded-lg flex items-center justify-center">
             <MdAppShortcut className="w-[50px] h-[50px] text-[#6d6c6c]"/>
            </div>
            App Dev
        </div>
        <div className="w-[100px] h-[130px] font-light text-[13px] 
        flex flex-col gap-3 text-center">
            <div className="w-[100px] h-[90px] bg-[#c596f8]
            rounded-lg flex items-center justify-center">
             <FaHackerrank className="w-[55px] h-[55px] text-[#6d6c6c]"/>
            </div>
            Ethical Hacking
        </div>
        <div className="w-[100px] h-[130px] font-light text-[13px] 
        flex flex-col gap-3 text-center">
            <div className="w-[100px] h-[90px] bg-[#b2ffbc]
            rounded-lg flex items-center justify-center">
             <AiFillOpenAI className="w-[60px] h-[60px] text-[#6d6c6c]"/>
            </div>
            AI/ML
        </div>
        <div className="w-[100px] h-[130px] font-light text-[13px] 
        flex flex-col gap-3 text-center">
            <div className="w-[100px] h-[90px] bg-[#f79caa]
            rounded-lg flex items-center justify-center">
             <SiGoogledataproc className="w-[50px] h-[50px] text-[#6d6c6c]"/>
            </div>
            Data Science
        </div>
        <div className="w-[100px] h-[130px] font-light text-[13px] 
        flex flex-col gap-3 text-center">
            <div className="w-[100px] h-[90px] bg-[#c596f8]
            rounded-lg flex items-center justify-center">
             <BsClipboardDataFill className="w-[50px] h-[50px] text-[#6d6c6c]"/>
            </div>
            Data Analytics
        </div>
        <div className="w-[100px] h-[130px] font-light text-[13px] 
        flex flex-col gap-3 text-center">
            <div className="w-[100px] h-[90px] bg-[#fbd9fb]
            rounded-lg flex items-center justify-center">
             <SiGooglegemini className="w-[50px] h-[50px] text-[#6d6c6c]"/>
            </div>
            AI Tools
        </div>
      </div>
    </div>
  );
}

export default ExploreCourses;
