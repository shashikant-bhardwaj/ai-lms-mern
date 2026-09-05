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
      className="w-full min-h-[50vh] flex 
        flex-col lg:flex-row items-center justify-center 
        gap-8 lg:gap-4 pt-[20px] sm:pt-[30px] lg:pt-[40px] 
        px-[20px] sm:px-[30px] pb-[40px] lg:pb-0"
    >
      {/* {left/top div} */}
      <div
        className="w-full lg:w-[350px] shrink-0 
            flex flex-col items-start justify-center gap-1 
            px-0 sm:px-[20px] md:px-[40px] lg:px-0"
      >
        <span className="text-[26px] sm:text-[30px] lg:text-[35px] font-semibold">
          Explore Courses
        </span>
        <span className="text-[26px] sm:text-[30px] lg:text-[35px] font-semibold">
          Our Courses
        </span>
        <p className="text-[15px] sm:text-[16px] lg:text-[17px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, cum
          minus modi, qui omnis a ratione laudantium quis blanditiis esse
          inventore quisquam asperiores sunt quo assumenda impedit quas
          temporibus maiores optio repellendus. Harum deserunt maxime neque
          distinctio aspernatur quam corrupti!
        </p>
        <button
          className="px-[16px] sm:px-[20px] py-[8px] sm:py-[10px] border-2 bg-[black]
        border-white text-white rounded-[10px] text-[15px] sm:text-[18px]
        font-light flex items-center gap-2 mt-[24px] sm:mt-[40px] cursor-pointer"
        >
          Explore Courses{" "}
          <SiViaplay className="w-[22px] h-[22px] sm:w-[30px] sm:h-[30px] fill-white" />
        </button>
      </div>

      {/* {right/bottom div} */}
      <div
        className="w-full lg:w-[720px] max-w-full 
      grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 
      gap-x-[20px] gap-y-[24px] sm:gap-[30px] lg:gap-[40px] 
      place-items-center"
      >
        <div className="w-[90px] sm:w-[100px] h-auto font-light text-[12px] sm:text-[13px] 
        flex flex-col gap-2 sm:gap-3 text-center items-center">
            <div className="w-[90px] h-[80px] sm:w-[100px] sm:h-[90px] bg-[#fbd9fb]
            rounded-lg flex items-center justify-center">
             <TbDeviceDesktopAnalytics className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] text-[#6d6c6c]"/>
            </div>
            Web Dev
        </div>
        <div className="w-[90px] sm:w-[100px] h-auto font-light text-[12px] sm:text-[13px] 
        flex flex-col gap-2 sm:gap-3 text-center items-center">
            <div className="w-[90px] h-[80px] sm:w-[100px] sm:h-[90px] bg-[#c2eecc]
            rounded-lg flex items-center justify-center">
             <FaUikit className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] text-[#6d6c6c]"/>
            </div>
            UI/UX Designing
        </div>
        <div className="w-[90px] sm:w-[100px] h-auto font-light text-[12px] sm:text-[13px] 
        flex flex-col gap-2 sm:gap-3 text-center items-center">
            <div className="w-[90px] h-[80px] sm:w-[100px] sm:h-[90px] bg-[#fab4c0]
            rounded-lg flex items-center justify-center">
             <MdAppShortcut className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] text-[#6d6c6c]"/>
            </div>
            App Dev
        </div>
        <div className="w-[90px] sm:w-[100px] h-auto font-light text-[12px] sm:text-[13px] 
        flex flex-col gap-2 sm:gap-3 text-center items-center">
            <div className="w-[90px] h-[80px] sm:w-[100px] sm:h-[90px] bg-[#c596f8]
            rounded-lg flex items-center justify-center">
             <FaHackerrank className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] text-[#6d6c6c]"/>
            </div>
            Ethical Hacking
        </div>
        <div className="w-[90px] sm:w-[100px] h-auto font-light text-[12px] sm:text-[13px] 
        flex flex-col gap-2 sm:gap-3 text-center items-center">
            <div className="w-[90px] h-[80px] sm:w-[100px] sm:h-[90px] bg-[#b2ffbc]
            rounded-lg flex items-center justify-center">
             <AiFillOpenAI className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] text-[#6d6c6c]"/>
            </div>
            AI/ML
        </div>
        <div className="w-[90px] sm:w-[100px] h-auto font-light text-[12px] sm:text-[13px] 
        flex flex-col gap-2 sm:gap-3 text-center items-center">
            <div className="w-[90px] h-[80px] sm:w-[100px] sm:h-[90px] bg-[#f79caa]
            rounded-lg flex items-center justify-center">
             <SiGoogledataproc className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] text-[#6d6c6c]"/>
            </div>
            Data Science
        </div>
        <div className="w-[90px] sm:w-[100px] h-auto font-light text-[12px] sm:text-[13px] 
        flex flex-col gap-2 sm:gap-3 text-center items-center">
            <div className="w-[90px] h-[80px] sm:w-[100px] sm:h-[90px] bg-[#c596f8]
            rounded-lg flex items-center justify-center">
             <BsClipboardDataFill className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] text-[#6d6c6c]"/>
            </div>
            Data Analytics
        </div>
        <div className="w-[90px] sm:w-[100px] h-auto font-light text-[12px] sm:text-[13px] 
        flex flex-col gap-2 sm:gap-3 text-center items-center">
            <div className="w-[90px] h-[80px] sm:w-[100px] sm:h-[90px] bg-[#fbd9fb]
            rounded-lg flex items-center justify-center">
             <SiGooglegemini className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] text-[#6d6c6c]"/>
            </div>
            AI Tools
        </div>
      </div>
    </div>
  );
}

export default ExploreCourses;