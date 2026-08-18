import React, { useState } from "react";
import logo from "../../public/logo.png";
import google from "../assets/google.jpg";
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import useSignUp from "../hooks/useSignUp.js";
function SignUp() {
  const { signUp, loading } = useSignUp();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    signUp(user);
  };

  return (
    <>
      <div
        className="bg-[#dddbdb] w-[100vw] h-[100vh] flex
        items-center justify-center"
      >
        <form
          onSubmit={onSubmitHandler}
          className="w-[90%] md:w-200 h-150 bg-[white] shadow-xl
        rounded-2xl flex"
        >
          {/* {left div} */}
          <div
            className="md:w-[50%] w-[100%] h-[100%] flex flex-col
        items-center justify-center gap-3"
          >
            <div>
              <h1 className="font-semibold text-black text-2xl">
                let's get started
              </h1>
              <h2 className="text-[#999797] text-[18px]">
                Create your account
              </h2>
            </div>
            <div
              className="flex flex-col gap-1 w-[80%] items-start
           justify-center px-3"
            >
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                id="name"
                name="fullName"
                value={user.fullName}
                onChange={onChange}
                type="text"
                className="border-1 w-[100%] h-[35px]
            border-[#e7e6e6] text-[15px] px-[20px]"
                placeholder="your name"
              />
            </div>
            <div
              className="flex flex-col gap-1 w-[80%] items-start
           justify-center px-3"
            >
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={user.email}
                onChange={onChange}
                type="text"
                className="border-1 w-[100%] h-[35px]
            border-[#e7e6e6] text-[15px] px-[20px]"
                placeholder="your email"
              />
            </div>
            <div
              className="flex flex-col gap-1 w-[80%] items-start
           justify-center px-3 relative"
            >
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                id="password"
                name="password"
                value={user.password}
                onChange={onChange}
                type={show ? "text" : "password"}
                className="border-1 w-[100%] h-[35px]
            border-[#e7e6e6] text-[15px] px-[20px]"
                placeholder="your password"
              />
              {!show ? (
                <IoEyeOutline
                  className="absolute w-[20px] cursor-pointer
            right-[5%] bottom-[10%]"
                  onClick={() => setShow((prev) => !prev)}
                />
              ) : (
                <IoEye
                  className="absolute w-[20px] cursor-pointer
            right-[5%] bottom-[10%] "
                  onClick={() => setShow((prev) => !prev)}
                />
              )}
            </div>
            <div
              className="flex md:w-[50%] w-[70%] items-center 
           justify-between"
            >
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Student"
                  onChange={onChange}
                  hidden
                />

                <span
                  className={`px-[10px] py-[5px] border-[2px] border-[#e7e6e6]
            rounded-xl cursor-pointer hover:border-black ${user.role === "Student" ? "border-black" : "border-[#646464]"}`}
                >
                  Student
                </span>
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="Educator"
                  onChange={onChange}
                  hidden
                />

                <span
                  className={`px-[10px] py-[5px] border-[2px] border-[#e7e6e6]
            rounded-xl cursor-pointer hover:border-black ${user.role === "Educator" ? "border-black" : "border-[#646464]"}`}
                >
                  Educator
                </span>
              </label>
            </div>
            <button
              disabled={loading}
              className="w-[80%] h-[40px] bg-black text-white
           cursor-pointer flex items-center justify-center rounded-[5px]"
            >
              {loading ? <ClipLoader size={30} color="white" /> : "SignUp"}
            </button>
            <div className="w-[80%] flex items-center gap-2">
              <div className="w-[25%] h-[0.5px] bg-[#c4c4c4]"></div>
              <div
                className="w-[50%] text-[15px] text-[#6f6f6f]
            flex items-center justify-center"
              >
                or continue
              </div>
              <div className="w-[25%] h-[0.5px] bg-[#c4c4c4]"></div>
            </div>
            <div
              className="w-[80%] h-[40px] border-1 border-[black]
           rounded-[5px] flex justify-center items-center"
            >
              <img src={google} alt="" className="w-[25px]" />
              <span className="text-[18px] text-gray-500">oogle</span>
            </div>
            <div className="text-[#6f6f6f">
              already have an account ?{" "}
              <span
                className="underline underline-offset-1
                 text-[black] cursor-pointer "
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </div>
          </div>

          {/* {right div} */}
          <div
            className="w-[50%] h-[100%] rounded-r-2xl bg-[black] 
        md:flex items-center justify-center flex-col hidden"
          >
            <img src={logo} alt="logo" className="w-50 shadow-2xl" />
            <span
              className="text-2xl text-white
            "
            >
              LearnPilot
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
