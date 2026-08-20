import React, { useState } from "react";
import logo from "../../public/logo.png";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import UseLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";


function Navbar() {
  const [show, setShow] = useState(false);
  const [showHam, setShowHam] = useState(false);
  const { authUser } = useSelector((state) => state.user);
  const { loading, logout } = UseLogout();
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-[100%] h-[70px] fixed top-0 px-[20px] py-[10px] flex items-center justify-between bg-[#00000047] z-10">
        <div className="lg:w-[20%] w-{40%] lg:pl-[50px]">
          <img
            src={logo}
            alt=""
            className="w-[60px] rounded-[5px] border-2 border-white "
          />
        </div>
        <div className="w-[30%] lg:flex items-center justify-center gap-4 hidden">
          {!authUser && (
            <IoPersonCircleSharp
              onClick={() => setShow((prev) => !prev)}
              className="w-[50px] h-[50px] fill-black cursor-pointer"
            />
          )}
          {authUser && (
            <div
              onClick={() => setShow((prev) => !prev)}
              className="w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black border-white
           cursor-pointer"
            >
              {authUser?.fullName?.slice(0, 1).toUpperCase()}
            </div>
          )}
          {authUser?.role === "Educator" && (
            <div
              className="px-[20px] py-[10px] border-2 border-white text-white bg-[black] rounded-[10px] text-[18px] font-light
          cursor-pointer"
            >
              Dashboard
            </div>
          )}
          {!authUser ? (
            <span
              onClick={() => navigate("/login")}
              className="px-[20px] py-[10px] border-2 border-white text-white rounded-[10px] text-[18px] font-light 
          cursor-pointer bg-[#000000d5]"
            >
              Login
            </span>
          ) : (
            <span
              onClick={logout}
              className="px-[20px] py-[10px] bg-white text-black rounded-[10px] shadow-sm shadow-black text-[18px]
          cursor-pointer"
            >
              {loading ? <ClipLoader size={30} color="white" /> : "Logout"}
            </span>
          )}
          {show && (
            <div
              className="absolute top-[110%] right-[15%] flex items-center flex-col justify-center gap-2 text-[16px] rounded-md bg-white
          px-[15px] py-[10px] border-[2px] border-black hover:border-white hover:text-white cursor-pointer hover:bg-black"
            >
              <span onClick={() => navigate("/profile")} className="bg-[black] text-white px-[30px] py-[10px] rounded-2xl hover:bg-gray-600">
                My Profile
              </span>
              <span className="bg-[black] text-white px-[30px] py-[10px] rounded-2xl hover:bg-gray-600">
                My Courses
              </span>
            </div>
          )}
        </div>
        <RxHamburgerMenu
          onClick={() => setShowHam((prev) => !prev)}
          className="w-[40px] h-[40px] lg:hidden fill-black cursor-pointer"
        />
        {
          <div
            className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000d6] flex items-center 
             justify-center flex-col gap-5 z-10 lg:hidden ${showHam ? "translate-x-0 transition duration-700" : "translate-x-[-100%]  transition duration-700"}`}
          >
            <RxCross1
              onClick={() => setShowHam(false)}
              className="absolute top-5 right-5 text-white w-8 h-8 cursor-pointer"
            />
              {!authUser && (
            <IoPersonCircleSharp
              className="w-[50px] h-[50px] fill-black cursor-pointer"
            />
          )}
          {authUser && (
            <div
              className="w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black border-white
           cursor-pointer"
            >
              {authUser?.fullName?.slice(0, 1).toUpperCase()}
            </div>
          )}
           <div
              onClick={() => navigate("/profile")}
              className="flex items-center justify-center  w-[200px] h-[65px] px-[20px] py-[10px] border-2 border-white text-white bg-[black] rounded-[10px] text-[18px] font-light
          cursor-pointer"
            >
              My Profile
            </div>
           <div
              className="flex items-center justify-center  w-[200px] h-[65px] px-[20px] py-[10px] border-2 border-white text-white bg-[black] rounded-[10px] text-[18px] font-light
          cursor-pointer"
            >
              My Courses
            </div>
           {authUser?.role === "Educator" && (
            <div
              className="flex items-center justify-center w-[200px] h-[65px] px-[20px] py-[10px] border-2 border-white text-white bg-[black] rounded-[10px] text-[18px] font-light
          cursor-pointer"
            >
              Dashboard
            </div>
          )}
           {!authUser ? (
            <span
              onClick={() => navigate("/login")}
              className="flex items-center justify-center  w-[200px] h-[65px] px-[20px] py-[10px] border-2 border-white text-white bg-[black] rounded-[10px] text-[18px] font-light
          cursor-pointer"
            >
              Login
            </span>
          ) : (
            <span
              onClick={logout}
              className="flex items-center justify-center  w-[200px] h-[65px] px-[20px] py-[10px] border-2 border-white text-white bg-[black] rounded-[10px] text-[18px] font-light
          cursor-pointer"
            >
              {loading ? <ClipLoader size={30} color="white" /> : "Logout"}
            </span>
          )}
           
          </div>
        }
      </div>
    </div>
  );
}

export { Navbar };
